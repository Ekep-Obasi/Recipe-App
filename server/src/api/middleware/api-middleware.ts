import { NextFunction, Request, Response } from 'express'
import { APIError } from '../../helpers/errors/app-error'
import UserRepository from '../../database/repositories/user-repository'
import { ILoginUserPayload } from '../../dto/user-dto'
import { User } from '../../domains/user'

declare global {
  namespace Express {
    interface Request {
      user: ILoginUserPayload
    }
  }
}

async function ApiMiddleware(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.header('x-api-key')
  const { email } = req.user
  const User = new UserRepository()

  const user = (await User.FindOneUser({ email })) as unknown as User

  if (!user) {
    const err = new APIError()
    next(err)
  }

  if (!apiKey || user.apiKey !== apiKey) {
    const err = new APIError(403, 'UNAUTHORIZED', 'access forbidden: invalida api key')
    next(err)
  }

  next()
}

export default ApiMiddleware
