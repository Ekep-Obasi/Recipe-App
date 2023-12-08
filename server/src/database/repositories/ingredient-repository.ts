import { Category } from '../../domains/category'
import Ingredient from '../../domains/ingredient'
import { ICreateIngredient, IUpdateIngredient } from '../../dto/ingredient-dto'
import { APIError } from '../../helpers/errors/app-error'
import { Drink, Ingredient as IngredientModel } from '../models'

class IngredientRepository {
  readonly _model = IngredientModel

  async BulkCreateCategories(payload: ICreateIngredient[]) {
    try {
      const ingredients = await this._model.bulkCreate(payload)

      return ingredients
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to create ingredients')
    }
  }

  async GetAllIngredients() {
    try {
      const ingredients = await this._model.findAll({ include: [Drink] })

      return ingredients
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to get all ingredients')
    }
  }

  async FindOneIngredient(where: Partial<Category>) {
    try {
      const ingredient = await this._model.findOne({ where: where })

      return ingredient
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to get ingredient')
    }
  }

  async CreateIngredient(payload: ICreateIngredient) {
    try {
      const ingredient = await this._model.create(payload)

      return ingredient
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to created ingredient')
    }
  }

  async UpdateIngredients(data: Partial<IUpdateIngredient>, where: Partial<Ingredient>) {
    try {
      await this._model.update(data, { where: where })

      const ingredient = await this.FindOneIngredient(where)

      return ingredient
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to update ingredient')
    }
  }

  async DeleteIngredients(where: Partial<Ingredient>) {
    try {
      await this._model.destroy({ where: where })
    } catch {
      throw new APIError(500, 'INTERNAL_ERROR', 'failed to delete ingredient')
    }
  }
}

export default IngredientRepository
