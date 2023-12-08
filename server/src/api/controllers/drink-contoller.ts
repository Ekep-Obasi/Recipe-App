import { NextFunction, Request, Response } from 'express'
import DrinkService from '../../services/drink-service'
import { ICreateDrinkPayload, IPutDrinkPayload, IUpdateDrink } from '../../dto/drink-dto'
import UserService from '../../services/user-service'
import { APIError } from '../../helpers/errors/app-error'

interface IDrinkController {
  _service: DrinkService
  _userService: UserService
}

class DrinkController implements IDrinkController {
  readonly _service
  readonly _userService

  constructor() {
    this._service = new DrinkService()
    this._userService = new UserService()
  }

  async bulkCreateDrinks(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <ICreateDrinkPayload[]>req.body

      const { email } = req.user

      const user = await this._userService._repo.FindOneUser({ email })

      if (!user) {
        const err = new APIError(403, 'NOT_FOUND', 'user not found')
        next(err)
      }

      const data = payload.map(({ userId, ...others }) => ({
        ...others,
        userId: user?.id as number,
      }))

      const drinks = await this._service.BulkCreateDrinks(data)

      res.send({
        statusCode: 200,
        data: drinks,
      })
    } catch (err) {
      next(err)
    }
  }

  async createDrink(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <ICreateDrinkPayload>req.body

      const { email } = req.user

      const file = req.file

      const user = await this._userService._repo.FindOneUser({ email })

      if (!user) {
        const err = new APIError(403, 'NOT_FOUND', 'user not found')
        next(err)
      }

      const drink = await this._service.CreateDrink({
        ...payload,
        imageURL: file?.filename as string,
        userId: user?.id as number,
      })

      res.send({
        statusCode: 200,
        data: drink,
      })
    } catch (err) {
      next(err)
    }
  }

  async updateDrink(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    const payload = <IUpdateDrink>req.body

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'url id param is required')
      next(err)
    }

    try {
      const updatedDrink = await this._service.UpdateDrink(id, payload)

      res.send({
        statusCode: 200,
        data: updatedDrink,
      })
    } catch (err) {
      next(err)
    }
  }

  async likeDrink(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'url id param is required')
      next(err)
    }

    try {
      const updatedUser = await this._service.LikeDrink(id)

      res.send({
        statusCode: 200,
        data: updatedUser,
      })
    } catch (err) {
      next(err)
    }
  }

  async resetDrink(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    const payload = <IPutDrinkPayload>req.body

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'url id param is required')
      next(err)
    }

    try {
      const drink = await this._service.ResetDrinkData(id, payload)

      res.send({
        statusCode: 200,
        data: drink,
      })
    } catch (err) {
      next(err)
    }
  }

  async getSelectedDrink(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    if (!id) {
      const err = new APIError(400, 'BAD_REQUEST', 'url id param is required')
      next(err)
    }

    try {
      const drink = await this._service.GetSelectedDrink(id)

      res.send({
        statusCode: 200,
        data: drink,
      })
    } catch (err) {
      next(err)
    }
  }

  async getAllDrinks(req: Request, res: Response, next: NextFunction) {
    try {
      const drinks = await this._service.GetAllDrinks()

      res.send({
        statusCode: 200,
        data: drinks,
      })
    } catch (err) {
      next(err)
    }
  }

  async deleteDrink(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id

    if (!id) {
      const err = new APIError(400, 'NOT_FOUND', 'url param id is required')
      next(err)
    }

    try {
      await this._service.DeleteDrink(id)

      res.send({
        statusCode: 200,
        data: {
          message: 'operation successful',
        },
      })
    } catch (err) {
      next(err)
    }
  }
}

export default DrinkController
