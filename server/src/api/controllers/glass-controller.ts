import { NextFunction, Request, Response } from "express";
import GlassService from "../../services/glass-service";
import { APIError } from "../../helpers/errors/app-error";
import { ICreateGlass, IUpdateGlass } from "../../dto/glass-dto";

interface IGlassController {
  _service: GlassService;
}

class GlassController implements IGlassController {
  readonly _service;

  constructor() {
    this._service = new GlassService();
  }

  async getAllGlasses(req: Request, res: Response, next: NextFunction) {
    try {
      const glasses = await this._service.GetAllGlasses();

      res.send({
        statusCode: 200,
        data: glasses,
      });
    } catch (err) {
      next(err);
    }
  }

  async getSelectedGlasses(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;

    if (!id) {
      const err = new APIError(400, "BAD_REQUEST", "invalid url id param");
      next(err);
    }

    try {
      const glass = await this._service.GetSelectedGlass(id);

      res.send({
        statusCode: 200,
        data: glass,
      });
    } catch (err) {
      next(err);
    }
  }

  async createGlass(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <ICreateGlass>req.body;

      const glass = await this._service.CreateGlass(payload);

      res.send({
        statusCode: 200,
        data: glass,
      });
    } catch (err) {
      next(err);
    }
  }

  async updateGlasses(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;

    if (!id) {
      const err = new APIError(400, "BAD_REQUEST", "invalid url id param");
      next(err);
    }

    const payload = <IUpdateGlass>req.body;

    try {
      const glass = await this._service.UpdataGlass(payload, { id });

      res.send({
        statusCode: 200,
        data: glass,
      });
    } catch (err) {
      next(err);
    }
  }

  async deleteGlasses(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;

    if (!id) {
      const err = new APIError(400, "BAD_REQUEST", "invalid url id param");
      next(err);
    }

    try {
      this._service.DeleteGlass(id);

      res.send({
        statusCode: 200,
        data: {
          message: "operation occured succesfully",
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

export default GlassController;
