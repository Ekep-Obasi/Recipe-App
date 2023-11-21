import DrinkRepository from "../database/repositories/drink-repository";
import {
  ICreateDrinkPayload,
  IPutDrinkPayload,
  IUpdateDrinkPayload,
} from "../dto/drink-dto";
import { APIError } from "../helpers/errors/app-error";

interface IDrinkService {
  _repo: DrinkRepository;
}

class DrinkService implements IDrinkService {
  readonly _repo: DrinkRepository;

  constructor() {
    this._repo = new DrinkRepository();
  }

  async CreateDrink(payload: ICreateDrinkPayload) {
    try {
      const drink = await this._repo.CreateDrink(payload);

      return drink;
    } catch (err) {
      throw new APIError();
    }
  }

  async UpdateDrink(id: number, payload: IUpdateDrinkPayload) {
    try {
      const updatedDrink = await this._repo.UpdateDrink(payload, { id });

      return updatedDrink;
    } catch {
      throw new APIError();
    }
  }

  async LikeDrink(id: number) {
    try {
      const drink = await this._repo.FindDrinkById(id);

      if (!drink) {
        throw new APIError(403, "NOT_FOUND", "drink not found");
      }

      const updatedDrink = await this._repo.UpdateDrink(
        { likes: drink.likes + 1 },
        { id }
      );

      return updatedDrink;
    } catch {
      throw new APIError();
    }
  }

  async ResetDrinkData(id: number, payload: IPutDrinkPayload) {
    try {
      const drink = await this._repo.ResetDrink(payload, { id });

      return drink;
    } catch {
      throw new APIError();
    }
  }

  async GetSelectedDrink(id: number) {
    try {
      const drink = await this._repo.FindDrinkById(id);

      return drink;
    } catch {
      throw new APIError();
    }
  }

  async GetAllDrinks() {
    try {
      const drinks = await this._repo.FindAllDrinks();

      return drinks;
    } catch {
      throw new APIError();
    }
  }

  async DeleteDrink(id: number) {
    try {
      await this._repo.DeleteDrink(id);
    } catch {
      throw new APIError();
    }
  }
}

export default DrinkService;
