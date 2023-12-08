import { NextFunction, Request, Response } from 'express'
import {
  IEditProfilePayload,
  ILoginUserPayload,
  IPutUserPayload,
  IResetPasswordPayload,
  ISignUpPayload,
} from '../../dto/user-dto'
import { APIError } from '../../helpers/errors/app-error'
import UserService from '../../services/user-service'

interface IUserController {
  _service: UserService
}

class UserController implements IUserController {
  readonly _service

  constructor() {
    this._service = new UserService()
  }

  async signUpUser(req: Request, res: Response, next: NextFunction) {
    const userData = <ISignUpPayload>req.body
    try {
      const user = await this._service.SignUp(userData)

      res.send({
        statusCode: 200,
        data: user,
      })
    } catch (err) {
      next(err)
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    const payload = <ILoginUserPayload>req.body
    try {
      const response = await this._service.LoginUser(payload)

      res.send({
        statusCode: 200,
        data: response,
      })
    } catch (err) {
      next(err)
    }
  }

  async editUserProfile(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    const payload = <IEditProfilePayload>req.body

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'invalid url param id required')
      next(err)
    }

    try {
      const updatedUser = await this._service.UpdateUserProfile(id, payload)

      res.send({
        statusCode: 200,
        data: updatedUser,
      })
    } catch (err) {
      next(err)
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'invalid url param id required')
      next(err)
    }

    try {
      await this._service.DeleteUserProfile(id)

      res.send({
        statusCode: 200,
        data: 'Operation Successful',
      })
    } catch (err) {
      next(err)
    }
  }

  async resetUserInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <IPutUserPayload>req.body

      const id = +req.params.id

      if (!id) {
        const err = new APIError(400, 'BAD_REQUEST', 'invalid url param id required')
        next(err)
      }

      const user = await this._service.ResetUserProfile(id, payload)

      res.send({
        statusCode: 200,
        data: user,
      })
    } catch (err) {
      next(err)
    }
  }

  async subscribeToApi(req: Request, res: Response, next: NextFunction) {
    const user = req.user

    try {
      const updatedUser = await this._service.SubsribeToApi(user.email)

      res.send({
        statusCode: 200,
        data: { apiKey: updatedUser?.apiKey },
      })
    } catch (err) {
      next(err)
    }
  }

  async becomeAdminUser(req: Request, res: Response, next: NextFunction) {
    const user = req.user

    try {
      const updatedUser = await this._service.BecomeAdminUser(user.email)

      res.send({
        statusCode: 200,
        data: updatedUser,
      })
    } catch (err) {
      next(err)
    }
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this._service.GetAllUsers()

      res.send({
        statusCode: 200,
        data: users,
      })
    } catch (err) {
      next(err)
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'invalid url param id required')
      next(err)
    }

    try {
      const user = await this._service.GetUserByID(id)

      res.send({
        statusCode: 200,
        data: user,
      })
    } catch (err) {
      next(err)
    }
  }

  async listUserDrinks(req: Request, res: Response, next: NextFunction) {
    const { email } = req.user

    const existingUser = await this._service._repo.FindOneUser({
      email,
    })

    if (!existingUser && existingUser === null) {
      const err = new APIError()
      return next(err)
    }

    try {
      const user = await this._service.ListUserDrinks(existingUser.id)

      res.send({
        statusCode: 200,
        data: user,
      })
    } catch (err) {
      next(err)
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    const payload = <IResetPasswordPayload>req.body

    try {
      const updatedUser = await this._service.ResetPassword(payload)

      res.send({
        statusCode: 200,
        data: updatedUser,
      })
    } catch (err) {
      next(err)
    }
  }
}

export default UserController
