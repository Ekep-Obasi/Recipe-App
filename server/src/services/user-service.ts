import UserRepository from '../database/repositories/user-repository'
import {
  IEditProfilePayload,
  ILoginUserPayload,
  IPutUserPayload,
  IResetPasswordPayload,
  ISignUpPayload,
} from '../dto/user-dto'
import { generateApiKey } from '../helpers'
import { generateSalt, hashPassword, validatePassword } from '../helpers/bycrypt'
import { APIError } from '../helpers/errors/app-error'
import { generateTokenSignature } from '../helpers/jwt'

interface IUserService {
  _repo: UserRepository
}

class UserService implements IUserService {
  readonly _repo: UserRepository

  constructor() {
    this._repo = new UserRepository()
  }

  async SignUp(payload: ISignUpPayload) {
    try {
      const salt = await generateSalt()
      const hashedPassowrd = await hashPassword(payload.password, salt)

      const existingUser = await this._repo.FindOneUser({
        email: payload.email,
      })

      if (existingUser !== null) {
        throw new APIError(409, 'CONFLICT', 'user already exists')
      }

      const user = await this._repo.CreateUser({
        ...payload,
        password: hashedPassowrd,
        salt,
      })

      return user
    } catch {
      throw new APIError()
    }
  }

  async LoginUser(payload: ILoginUserPayload) {
    try {
      const { email, password } = payload

      const existingUser = await this._repo.FindOneUser({ email: email })

      if (existingUser) {
        const isValidUser = await validatePassword(password, existingUser.password, existingUser.salt)

        if (isValidUser && existingUser) {
          const token = await generateTokenSignature(payload)

          return { id: existingUser.id, token }
        }
      } else {
        throw new APIError(400, 'BAD_REQUEST', 'invalid username or password')
      }
    } catch {
      throw new APIError()
    }
  }

  async ResetUserProfile(id: number, payload: IPutUserPayload) {
    try {
      const requestLength = Object.keys(payload).length

      if (requestLength < 3) {
        throw new APIError(400, 'BAD_REQUEST', `Expected 3 entries but recieved ${requestLength}`)
      }

      const resetedUser = await this._repo.ResetUserInfo(id, payload)

      return resetedUser
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to reset user info')
    }
  }

  async UpdateUserProfile(id: number, payload: IEditProfilePayload) {
    try {
      const updatedUser = await this._repo.UpdateUserInfo(id, payload)

      return updatedUser
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to update profile')
    }
  }

  async DeleteUserProfile(id: number) {
    try {
      await this._repo.DeleteUser(id)
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to delete user')
    }
  }

  async SubsribeToApi(email: string) {
    try {
      const apiKey = generateApiKey()

      const user = await this._repo.FindOneUser({ email })

      const updatedUser = await this._repo.UpdateUserInfo(user?.id as number, {
        apiKey,
      })

      return updatedUser
    } catch {
      throw new APIError()
    }
  }

  async BecomeAdminUser(email: string) {
    try {
      const user = await this._repo.FindOneUser({ email })

      const updatedUser = await this._repo.UpdateUserInfo(user?.id as number, {
        role: 'ADMIN_USER',
      })

      return updatedUser
    } catch {
      throw new APIError()
    }
  }

  async GetAllUsers() {
    try {
      const user = await this._repo.GetAllUsers()

      return user
    } catch {
      throw new APIError()
    }
  }

  async GetUserByID(id: number) {
    try {
      const user = await this._repo.GetUserById(id)

      return user
    } catch {
      throw new APIError()
    }
  }

  async ListUserDrinks(id: number) {
    try {
      const user = await this._repo.GetUserDrinks(id)

      return user
    } catch {
      throw new APIError()
    }
  }

  async ResetPassword(payload: IResetPasswordPayload) {
    try {
      const user = await this._repo.FindOneUser({ email: payload.email })

      if (user === null) {
        throw new APIError(403, 'NOT_FOUND', 'email not found our records')
      }

      const salt = await generateSalt()

      const hashedPassowrd = await hashPassword(payload.password, salt)

      const updatedUser = await this._repo.UpdateUserInfo(
        user?.id as number,
        { password: hashedPassowrd, salt } as IEditProfilePayload,
      )

      return updatedUser
    } catch {
      throw new APIError()
    }
  }
}

export default UserService
