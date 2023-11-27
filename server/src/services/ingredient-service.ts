import IngredientRepository from "../database/repositories/ingredient-repository";
import Ingredient from "../domains/ingredient";
import { ICreateIngredient, IUpdateIngredient } from "../dto/ingredient-dto";
import { APIError } from "../helpers/errors/app-error";

interface IIngredientService {
  _repo: IngredientRepository;
}

class IngredientService implements IIngredientService {
  readonly _repo: IngredientRepository;

  constructor() {
    this._repo = new IngredientRepository();
  }

  async BulkCreateIngredients(payload: ICreateIngredient[]) {
    try {
      const ingredients = this._repo.BulkCreateCategories(payload);

      return ingredients;
    } catch {
      throw new APIError();
    }
  }

  async CreateIngredient(payload: ICreateIngredient) {
    try {
      const ingredient = await this._repo.CreateIngredient(payload);

      return ingredient;
    } catch {
      throw new APIError();
    }
  }

  async GetAllIngredients() {
    try {
      const ingredients = await this._repo.GetAllIngredients();

      return ingredients;
    } catch {
      throw new APIError();
    }
  }

  async GetSelectedIngredient(id: number) {
    try {
      const ingredient = await this._repo.FindOneIngredient({ id });

      return ingredient;
    } catch {
      throw new APIError();
    }
  }

  async UpdataIngredient(data: IUpdateIngredient, where: Partial<Ingredient>) {
    try {
      const ingredient = this._repo.UpdateIngredients(data, where);

      return ingredient;
    } catch (err) {
      throw new APIError();
    }
  }

  async DeleteIngredient(id: number) {
    try {
      await this._repo.DeleteIngredients({ id });
    } catch {
      throw new APIError();
    }
  }
}

export default IngredientService;
