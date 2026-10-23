# CreditCheck Admin Platform

A secure enterprise admin dashboard and integration platform for CreditChek-style consumer reporting, income verification, and RecovaPro orchestration.

## Stack

- Frontend: Next.js 14, TypeScript, Tailwind CSS, App Router
- Backend: NestJS, TypeScript
- Database: PostgreSQL + Prisma
- Auth: JWT, bcrypt/argon2, TOTP-based MFA
- API docs: Swagger/OpenAPI
- Security: role-based access control, audit logs, session lock, inactivity timeout

## Repository structure

- apps/web — admin dashboard frontend
- apps/api — NestJS API backend
- prisma — Prisma schema and migrations
- .env.example — sample environment variables

## Local development

1. Install dependencies
   ```bash
   npm install
   ```

2. Configure environment
   ```bash
   cp .env.example .env
   ```

3. Generate Prisma client
   ```bash
   npm run prisma:generate --workspace apps/api
   ```

4. Run database migrations
   ```bash
   npm run prisma:migrate --workspace apps/api
   ```

5. Start both apps
   ```bash
   npm run dev
   ```

## Key features

- Enterprise admin dashboard with analytics and module views
- Admin-created users with default temporary passwords
- Forced password change on first login
- 2FA enrollment and admin reset
- Password reset links and MFA recovery flow
- Auto-lock on inactivity and window blur
- Role-based permissions and protected endpoint guards
- RecovaPro integration workflow
- Consumer reporting request tracking
- Income verification workflow
- Audit logging for security and admin actions

## Security notes

- Preferred secret storage is environment variables only
- Access tokens should be short-lived and refresh tokens rotated
- Session lock can be configured via inactivity timeout in the frontend
- Sensitive operations are logged with user agent and IP metadata when available

## License

This project is intended for internal enterprise use and is not production-hardened without a full deployment and security review.
