interface Problem {
  title: string;
  statusCode: number;
  detail?: string;
  errors?: Record<string, string[]>;
}
interface BadRequestError extends Problem {}
interface UnauthorizedError extends Problem {}
interface ValidationError extends Problem {}
interface NorFoundError extends Problem {}
interface UnhandledException extends Problem {}
interface NetworkError extends Problem {}

export type {
  Problem,
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NorFoundError,
  UnhandledException,
  NetworkError,
};
