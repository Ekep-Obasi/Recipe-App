import CategoryModel from "../models/category";
import { ICreateCategory } from "../../dto/category-dto";
import { APIError } from "../../helpers/errors/app-error";
import { Category } from "../../domains/category";
import { Drink } from "../models";

class CategoryRepository {
  readonly _model = CategoryModel;

  async CreateCategory(payload: ICreateCategory) {
    try {
      const category = await this._model.create({ ...payload } as any);
      return category;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to create category");
    }
  }

  async GetAllCategories() {
    try {
      const categories = await this._model.findAll({ include: [Drink] });
      return categories;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to get all categories");
    }
  }

  async FindOneCategory(id: string) {
    try {
      const categories = await this._model.findOne({ where: { id } });
      return categories;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to find category");
    }
  }

  async UpdateCategory(payload: Category) {
    try {
      const catgory = await this._model.update(payload, {
        where: { id: payload.id },
      });
      return catgory;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to update category");
    }
  }

  async PatchCategory(payload: Partial<Category>) {
    try {
      const catgory = await this._model.update(payload, {
        where: { id: payload.id },
      });
      return catgory;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to patch category");
    }
  }

  async DeleteCategory(id: string) {
    try {
      const category = await this._model.destroy({ where: { id } });
      return category;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to delete category");
    }
  }
}

export default CategoryRepository;
