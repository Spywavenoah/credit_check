import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const ROLES_KEY = 'roles';
export const PERMISSION_KEY = 'permissions';

export const Roles = (...roles: string[]) => {
  return (target: any, key?: string, descriptor?: PropertyDescriptor) => {
    Reflect.defineMetadata(ROLES_KEY, roles, descriptor ? descriptor.value : target);
  };
};

export const Permissions = (...permissions: string[]) => {
  return (target: any, key?: string, descriptor?: PropertyDescriptor) => {
    Reflect.defineMetadata(PERMISSION_KEY, permissions, descriptor ? descriptor.value : target);
  };
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSION_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      throw new ForbiddenException('User context missing');
    }

    const userRoles: string[] = Array.isArray(user.roles) ? user.roles : [user.role];
    const userPermissions: string[] = Array.isArray(user.permissions) ? user.permissions : [];

    const hasRequiredRole = !requiredRoles || requiredRoles.some((role) => userRoles.includes(role));
    const hasRequiredPermission =
      !requiredPermissions || requiredPermissions.some((perm) => userPermissions.includes(perm));

    if (!hasRequiredRole || !hasRequiredPermission) {
      throw new ForbiddenException('You do not have the required role or permission');
    }

    return true;
  }
}
