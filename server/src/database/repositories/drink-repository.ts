import { Drink } from '../../domains/drink'
import { ICreateDrink, ICreateDrinkPayload, IPutDrinkPayload, IUpdateDrinkPayload } from '../../dto/drink-dto'
import { APIError } from '../../helpers/errors/app-error'
import { Category, DrinkCategory, DrinkIngredient, Drink as DrinkModel, Glass, Ingredient } from '../models'

interface IDrinkRepository {
  _model: DrinkModel
}

class DrinkRepository {
  readonly _model = DrinkModel
  readonly _cdModel = DrinkCategory
  readonly _diModel = DrinkIngredient

  async BulkCreateDrinks(payload: ICreateDrinkPayload[]) {
    const drinks = Promise.all(
      payload.map(
        async ({ categoryIds, ingredientIds, ...payload }) =>
          await this._model.create(payload).then(async (drink) => {
            const c = categoryIds.map((id) => ({
              drinkId: drink.id,
              categoryId: id,
            }))

            const i = categoryIds.map((id) => ({
              drinkId: drink.id,
              categoryId: id,
            }))

            await this._cdModel.bulkCreate(c)
            await this._diModel.bulkCreate(i)

            return drink
          }),
      ),
    )
      .then((res) => res)
      .catch(() => {
        throw new APIError()
      })

    return drinks
  }

  async CreateDrink(drinkData: ICreateDrinkPayload) {
    try {
      const drink = await this._model.create(drinkData)

      return drink
    } catch (err) {
      console.log(err)
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to create drink')
    }
  }

  async FindOneDrink(where: Partial<IUpdateDrinkPayload>) {
    try {
      const drink = await this._model.findOne({
        include: [Category, Ingredient, Glass],
        where: where,
      })

      return drink
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', '')
    }
  }

  async FindAllDrinks() {
    try {
      const drinks = await this._model.findAll({
        include: [Category, Ingredient, Glass],
      })

      return drinks
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to get all drinks')
    }
  }

  async FindDrinkById(id: number) {
    try {
      const drink = await this._model.findByPk(id, {
        include: [Category, Ingredient, Glass],
      })

      return drink
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to find this drink')
    }
  }

  async DeleteDrink(id: number) {
    try {
      await this._model.destroy({ where: { id } })
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to delete drink')
    }
  }

  async UpdateDrink(data: Partial<Drink>, where: Partial<Drink>) {
    try {
      await this._model.update(data, { where: where })

      const drink = await this.FindOneDrink(where)

      return drink
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to update drink')
    }
  }

  async ResetDrink(data: IPutDrinkPayload, where: Partial<Drink>) {
    try {
      await this._model.update(data, { where: where })

      const drink = await this.FindOneDrink(where)

      return drink
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to reset drink data')
    }
  }
}

export default DrinkRepository
