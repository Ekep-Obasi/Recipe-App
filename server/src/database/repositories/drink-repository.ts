import { Drink } from "../../domains/drink";
import {
  ICreateDrinkPayload,
  IPutDrinkPayload,
  IUpdateDrinkPayload,
} from "../../dto/drink-dto";
import { APIError } from "../../helpers/errors/app-error";
import { Category, Drink as DrinkModel, Glass, Ingredient } from "../models";

interface IDrinkRepository {
  _model: DrinkModel;
}

class DrinkRepository {
  readonly _model = DrinkModel;

  async CreateDrink(drinkData: ICreateDrinkPayload) {
    try {
      const drink = await this._model.create(drinkData);

      return drink;
    } catch (err) {
      console.log(err);
      throw new APIError(500, "INTERNAL_ERROR", "failed to create drink");
    }
  }

  async FindOneDrink(where: Partial<IUpdateDrinkPayload>) {
    try {
      const drink = await this._model.findOne({
        include: [Category, Ingredient, Glass],
        where: where,
      });

      return drink;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "");
    }
  }

  async FindAllDrinks() {
    try {
      const drinks = await this._model.findAll({
        include: [Category, Ingredient, Glass],
      });

      return drinks;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to get all drinks");
    }
  }

  async FindDrinkById(id: number) {
    try {
      const drink = await this._model.findByPk(id, {
        include: [Category, Ingredient, Glass],
      });

      return drink;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to find this drink");
    }
  }

  async DeleteDrink(id: number) {
    try {
      await this._model.destroy({ where: { id } });
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to delete drink");
    }
  }

  async UpdateDrink(data: Partial<Drink>, where: Partial<Drink>) {
    try {
      await this._model.update(data, { where: where });

      const drink = await this.FindOneDrink(where);

      return drink;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to update drink");
    }
  }

  async ResetDrink(data: IPutDrinkPayload, where: Partial<Drink>) {
    try {
      await this._model.update(data, { where: where });

      const drink = await this.FindOneDrink(where);

      return drink;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to reset drink data");
    }
  }
}

export default DrinkRepository;
