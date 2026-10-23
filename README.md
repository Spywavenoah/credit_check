# CreditCheck Admin Platform

A secure enterprise admin dashboard and integration platform for CreditChek operations, including user management, MFA, password resets, RecovaPro, Consumer Reporting, and Income Service workflows.

## Stack
- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: NestJS + TypeScript
- Database: PostgreSQL + Prisma
- Auth: JWT + refresh tokens + TOTP MFA
- Security: RBAC, audit logs, session lock

## Monorepo structure
- `apps/web` — admin dashboard frontend
- `apps/api` — backend API
- `prisma` — Prisma schema and migrations

## Quick start

```bash
npm install
npm run dev
```

## Environment
Copy `.env.example` to `.env` and update values before running the app.

## Features included
- Admin user creation and role management
- Password reset and MFA workflows
- First login password change enforcement
- Auto-lock on focus loss / inactivity
- RecovaPro integration scaffolding
- Consumer Reporting and Income Service modules
- Audit log tracking
