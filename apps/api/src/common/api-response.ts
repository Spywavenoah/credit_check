export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
};

export const ok = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message,
});

export const fail = <T>(error: string, data?: T): ApiResponse<T> => ({
  success: false,
  error,
  data,
});
