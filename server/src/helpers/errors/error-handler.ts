import winston, { transports } from 'winston'
import { AppError } from './app-error'
import { Request, Response, NextFunction } from 'express'

const LogErrors = winston.createLogger({
  transports: [new transports.File({ filename: 'app-error.log' })],
})

class ErrorLogger {
  async logError(err: Error): Promise<boolean> {
    LogErrors.log({
      private: true,
      level: 'error',
      message: `${new Date()}-${JSON.stringify(err)}`,
    })
    return false
  }

  isAppError(error: Error): boolean {
    if (error instanceof AppError) {
      return true
    } else {
      return false
    }
  }
}

const ErrorHandler = async (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const errorLogger = new ErrorLogger()

  process.on('uncaughtException', (reason: Error, promise: Promise<any>) => {
    console.error(reason, 'UNHANDLED')
    throw reason
  })

  process.on('uncaughtException', (error: Error) => {
    errorLogger.logError(error)
    if (errorLogger.isAppError(err)) {
    }
  })

  await errorLogger.logError(err)
  if (errorLogger.isAppError(err)) {
    if (err.stack && process.env.NODE_DEV === 'dev') {
      return res.status(err.statusCode).json({
        errorCode: err.statusCode,
        errorType: err.errorType,
        error: {
          message: err.stack,
        },
      })
    }
    return res.status(err.statusCode).json({
      errorCode: err.statusCode,
      errorType: err.errorType,
      error: {
        message: err.message,
      },
    })
  }

  next()
  return res.send({
    errorCode: 500,
    errorType: 'INTERNAL_ERROR',
    error: {
      message: err.message,
    },
  })
}

export default ErrorHandler
