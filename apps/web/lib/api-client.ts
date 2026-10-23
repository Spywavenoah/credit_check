import { apiFetch } from './api';

export const authApi = {
  login: (payload: { email: string; password: string }) => apiFetch('/api/v1/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  setupTwoFactor: (payload: { userId: string }) => apiFetch('/api/v1/auth/setup-2fa', { method: 'POST', body: JSON.stringify(payload) }),
  verifyTwoFactor: (payload: { code: string }) => apiFetch('/api/v1/auth/verify-2fa', { method: 'POST', body: JSON.stringify(payload) }),
};

export const usersApi = {
  list: () => apiFetch('/api/v1/users'),
  get: (id: string) => apiFetch(`/api/v1/users/${id}`),
  create: (payload: Record<string, unknown>) => apiFetch('/api/v1/users', { method: 'POST', body: JSON.stringify(payload) }),
};
