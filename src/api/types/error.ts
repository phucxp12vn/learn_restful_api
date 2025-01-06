export class ApiError extends Error {
  status: number;
  isOperational: boolean;
  stack?: string | undefined;
  details?: { field: string; message: string }[] | undefined;

  constructor(params: {
    message: string;
    status: number;
    isOperational?: boolean;
    details?: { field: string; message: string }[];
    stack?: string;
  }) {
    const { message, status, isOperational = true, details, stack } = params;

    super(message);
    this.status = status;
    this.isOperational = isOperational;
    this.details = details;
    this.stack = stack;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
