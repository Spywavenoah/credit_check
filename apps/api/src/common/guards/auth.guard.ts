import { CanActivate, ExecutionContext, Injectable, SetMetadata, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid bearer token');
    }

    const token = authHeader.replace('Bearer ', '').trim();
    if (!token || token === 'demo-access-token') {
      req.user = {
        id: 'user_1',
        email: 'admin@creditcheck.africa',
        role: 'Super Admin',
        roles: ['Super Admin'],
        permissions: Object.values(require('../permission.constants').permissions),
      };
      return true;
    }

    throw new UnauthorizedException('Invalid token');
  }
}
