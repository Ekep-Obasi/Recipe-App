import CategoryRepository from "../database/repositories/category-repository";
import { ICreateCategory, IUpdateCategory } from "../dto/category-dto";

interface ICategoryService {
  _repo: CategoryRepository;
}

class CategoryService implements ICategoryService {
  readonly _repo;

  constructor() {
    this._repo = new CategoryRepository();
  }

  async BulkCreateCategories(payload: ICreateCategory[]) {
    try {
      const categories = await this._repo.BulkCreateCategories(payload);

      return categories;
    } catch {
      throw new Error("An error occured while R/W the db");
    }
  }

  async createCategory(data: ICreateCategory) {
    try {
      const category = await this._repo.CreateCategory(data);
      return category;
    } catch {
      throw new Error("An error occured while R/W the db");
    }
  }

  async getAllCategories() {
    try {
      const categories = await this._repo.GetAllCategories();
      return categories;
    } catch {
      throw new Error("An error occured while R/W the db");
    }
  }

  async getSelectedCategory(id: string) {
    try {
      const category = await this._repo.FindOneCategory(id);
      return category;
    } catch {
      throw new Error("An error occured while R/W the db");
    }
  }

  async updateCategory(id: string, data: IUpdateCategory) {
    try {
      const category = await this._repo.UpdateCategory({ id: +id, ...data });
      return category;
    } catch {
      throw new Error("An error occured while R/W the db");
    }
  }

  async patchCategory(data: IUpdateCategory) {
    try {
      const category = await this._repo.PatchCategory(data);
      return category;
    } catch {
      throw new Error("An error occured while R/W the db");
    }
  }

  async deleteCategory(id: string) {
    try {
      await this._repo.DeleteCategory(id);
    } catch {
      throw new Error("An error occured while W/R the db");
    }
  }
}

export default CategoryService;
