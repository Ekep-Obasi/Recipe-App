import CategoryModel from "../models/category";
import { ICreateCategory } from "../../dto/category-dto";
import { APIError } from "../../helpers/errors/app-error";
import { Category } from "../../domains/category";

class CategoryRepository {
  private readonly _Model = CategoryModel;

  async CreateCategory(payload: ICreateCategory) {
    try {
      const category = await this._Model.create({ ...payload } as any);
      return category;
    } catch {
      throw new APIError();
    }
  }

  async GetAllCategories() {
    try {
      const categories = await this._Model.findAll();
      return categories;
    } catch {
      throw new APIError();
    }
  }

  async FindOneCategory(id: string) {
    try {
      const categories = await this._Model.findOne({ where: { id } });
      return categories;
    } catch {
      throw new APIError();
    }
  }

  async UpdateCategory({ id, name, description }: Category) {
    try {
      const catgory = await this._Model.update(
        { name, description },
        { where: { id } }
      );
      return catgory;
    } catch {
      throw new APIError();
    }
  }

  async PatchCategory({ id, name, description }: Partial<Category>) {
    try {
      const catgory = await this._Model.update(
        { name, description },
        { where: { id } }
      );
      return catgory;
    } catch {
      throw new APIError();
    }
  }

  async DeleteCategory(id: string) {
    try {
      const category = await this._Model.destroy({ where: { id } });
      return category;
    } catch {
      throw new APIError();
    }
  }
}

export default CategoryRepository;
