enum ERROR_CODES {
  CONFLICT = 409,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

type ERROR_TYPE = keyof typeof ERROR_CODES;

// Base Error Class
abstract class AppError extends Error {
  public statusCode: ERROR_CODES;
  public errorType: ERROR_TYPE;
  public isOperational: boolean;
  public errorStack: string | undefined;
  public logError: boolean;

  constructor(
    statusCode: ERROR_CODES,
    errorType: ERROR_TYPE,
    description: string,
    isOperational: boolean,
    errorStack?: string,
    logError: boolean = true
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.isOperational = isOperational;

    this.errorStack = errorStack;
    this.logError = logError;
  }
}

// API Specific Errors
class APIError extends AppError {
  constructor(
    statusCode: ERROR_CODES = ERROR_CODES.INTERNAL_ERROR,
    errorType: ERROR_TYPE = "INTERNAL_ERROR",
    description: string = "Internal Server Error",
    isOperational: boolean = true
  ) {
    super(statusCode, errorType, description, isOperational);
  }
}

// 400
class BadRequestError extends AppError {
  constructor(
    description: string = "Bad request",
    loggingErrorResponse: boolean = false
  ) {
    super(
      ERROR_CODES.BAD_REQUEST,
      "BAD_REQUEST",
      description,
      true,
      "errorStack",
      loggingErrorResponse
    );
  }
}

// 400
class ValidationError extends AppError {
  constructor(
    description: string = "Validation Error",
    errorStack: string | undefined
  ) {
    super(
      ERROR_CODES.BAD_REQUEST,
      "BAD_REQUEST",
      description,
      true,
      errorStack
    );
  }
}

export { AppError, APIError, BadRequestError, ValidationError, ERROR_CODES };
