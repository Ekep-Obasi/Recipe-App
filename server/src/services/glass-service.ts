import GlassRepository from "../database/repositories/glass-repository";
import { Glass } from "../domains/glass";
import { ICreateGlass, IUpdateGlass } from "../dto/glass-dto";
import { APIError } from "../helpers/errors/app-error";

interface IGlassService {
  _repo: GlassRepository;
}

class GlassService implements IGlassService {
  readonly _repo: GlassRepository;

  constructor() {
    this._repo = new GlassRepository();
  }

  async CreateGlass(payload: ICreateGlass) {
    try {
      const glass = await this._repo.CreateGlass(payload);

      return glass;
    } catch {
      throw new APIError();
    }
  }

  async GetAllGlasses() {
    try {
      const glasses = await this._repo.GetGlasses();

      return glasses;
    } catch {
      throw new APIError();
    }
  }

  async GetSelectedGlass(id: number) {
    try {
      const glass = await this._repo.FindOneGlass({ id });

      return glass;
    } catch {
      throw new APIError();
    }
  }

  async UpdataGlass(data: IUpdateGlass, where: Partial<Glass>) {
    try {
      const glass = this._repo.UpdateGlasses(data, where);

      return glass;
    } catch (err) {
      throw new APIError();
    }
  }

  async DeleteGlass(id: number) {
    try {
      await this._repo.DeleteGlasses({ id });
    } catch {
      throw new APIError();
    }
  }
}

export default GlassService;
