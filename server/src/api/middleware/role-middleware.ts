import { NextFunction, Request, Response } from 'express'
import { APIError } from '../../helpers/errors/app-error'
import UserRepository from '../../database/repositories/user-repository'

async function RoleMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = req.user

  const repo = new UserRepository()

  const savedUser = await repo.FindOneUser({ email: user.email })

  if (!savedUser) {
    const err = new APIError()
    next(err)
  }

  if (savedUser && savedUser.role === 'ADMIN_USER') {
    next()
  } else {
    const err = new APIError(403, 'UNAUTHORIZED', 'Access is forbidden')

    next(err)
  }
}

export default RoleMiddleware
