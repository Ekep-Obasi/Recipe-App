import CategoryModel from "../models/category";
import { Category } from "../../types";
import { ICreateCategory } from "../../dto/category-dto";

class CategoryRepository {
  private readonly _model = CategoryModel;

  async CreateCategory({ name, description }: ICreateCategory) {
    try {
      const category = await this._model.create({ name, description });
      console.log(category);
      return category;
    } catch {
      throw new Error("An internal Error occured");
    }
  }

  async GetAllCategories() {
    try {
      const categories = await this._model.findAll();
      return categories;
    } catch {
      throw new Error("An internal Error occured");
    }
  }

  async FindOneCategory(id: string) {
    try {
      const categories = await this._model.findOne({ where: { id } });
      return categories;
    } catch {
      throw new Error("An internal Error occured");
    }
  }

  async UpdateCategory({ id, name, description }: Category) {
    try {
      const catgory = await this._model.update(
        { name, description },
        { where: { id } }
      );
      return catgory;
    } catch {
      throw new Error("An internal Error occured");
    }
  }

  async PatchCategory({ id, name, description }: Partial<Category>) {
    try {
      const catgory = await this._model.update(
        { name, description },
        { where: { id } }
      );
      return catgory;
    } catch {
      throw new Error("An internal Error occured");
    }
  }

  async DeleteCategory(id: string) {
    try {
      const category = await this._model.destroy({ where: { id } });
      return category;
    } catch {
      throw new Error("An internal Error occured");
    }
  }
}

export default CategoryRepository;
