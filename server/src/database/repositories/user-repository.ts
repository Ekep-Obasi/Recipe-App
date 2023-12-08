import { User } from '../../domains/user'
import { IEditProfilePayload, IPutUserPayload, ISignUpUser } from '../../dto/user-dto'
import { APIError } from '../../helpers/errors/app-error'
import { Drink, User as UserModel } from '../models'

class UserRepository {
  private _model = UserModel

  async CreateUser(userData: ISignUpUser) {
    try {
      const user = await this._model.create({
        ...userData,
        drinks: [],
        role: 'GUEST_USER',
        apiKey: '',
      })

      return user
    } catch (err) {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to create user')
    }
  }

  async GetAllUsers() {
    try {
      const users = await this._model.findAll()

      return users
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to get all users')
    }
  }

  async GetUserById(id: number) {
    try {
      const user = await this._model.findByPk(id)

      return user
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to get user')
    }
  }

  async FindOneUser(where: Partial<User>) {
    try {
      const user = await this._model.findOne({ where: where })

      return user
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to find user')
    }
  }

  async UpdateUserInfo(id: number, userData: IEditProfilePayload) {
    try {
      await this._model.update({ ...userData }, { where: { id } })

      const user = await this._model.findByPk(id)

      return user
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to update profile')
    }
  }

  async ResetUserInfo(id: number, payload: IPutUserPayload) {
    try {
      await this._model.update({ ...payload }, { where: { id } })

      const user = await this._model.findByPk(id)

      return user
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to reset user info')
    }
  }

  async DeleteUser(id: number) {
    try {
      await this._model.destroy({ where: { id } })
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to delete user')
    }
  }

  async GetUserDrinks(id: number) {
    try {
      const user = await this._model.findOne({
        include: [Drink],
        where: { id },
      })
      return user
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to get user')
    }
  }
}

export default UserRepository
