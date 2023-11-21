import { Category } from "../../domains/category";
import { Glass } from "../../domains/glass";
import { ICreateGlass, IUpdateGlass } from "../../dto/glass-dto";
import { APIError } from "../../helpers/errors/app-error";
import { Glass as GlassModel } from "../models";

class GlassRepository {
  readonly _model = GlassModel;

  async GetGlasses() {
    try {
      const glasses = await this._model.findAll();

      return glasses;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to get all glasses");
    }
  }

  async FindOneGlass(where: Partial<Category>) {
    try {
      const glasses = await this._model.findOne({ where: where });

      return glasses;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to get glass");
    }
  }

  async CreateGlass(payload: ICreateGlass) {
    try {
      const glass = await this._model.create(payload);

      return glass;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to created glass");
    }
  }

  async UpdateGlasses(data: Partial<IUpdateGlass>, where: Partial<Glass>) {
    try {
      await this._model.update(data, { where: where });

      const glass = await this.FindOneGlass(where);

      return glass;
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to update glass");
    }
  }

  async DeleteGlasses(where: Partial<Glass>) {
    try {
      await this._model.destroy({ where: where });
    } catch {
      throw new APIError(500, "INTERNAL_ERROR", "failed to delete glass");
    }
  }
}

export default GlassRepository;
