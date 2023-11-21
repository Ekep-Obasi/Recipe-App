import { NextFunction, Request, Response } from "express";
import { APIError } from "../../helpers/errors/app-error";
import IngredientService from "../../services/ingredient-service";
import { ICreateIngredient, IUpdateIngredient } from "../../dto/ingredient-dto";

interface IIngredientController {
  _service: IngredientService;
}

class IngredientController implements IIngredientController {
  readonly _service;

  constructor() {
    this._service = new IngredientService();
  }

  async getAllIngredients(req: Request, res: Response, next: NextFunction) {
    try {
      const ingredients = await this._service.GetAllIngredients();

      res.send({
        statusCode: 200,
        data: ingredients,
      });
    } catch (err) {
      next(err);
    }
  }

  async getSelectedIngredients(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id = +req.params.id;

    if (!id) {
      const err = new APIError(400, "BAD_REQUEST", "invalid url id param");
      next(err);
    }

    try {
      const ingredient = await this._service.GetSelectedIngredient(id);

      res.send({
        statusCode: 200,
        data: ingredient,
      });
    } catch (err) {
      next(err);
    }
  }

  async createIngredient(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = <ICreateIngredient>req.body;

      const ingredient = await this._service.CreateIngredient(payload);

      res.send({
        statusCode: 200,
        data: ingredient,
      });
    } catch (err) {
      next(err);
    }
  }

  async updateIngredients(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;

    if (!id) {
      const err = new APIError(400, "BAD_REQUEST", "invalid url id param");
      next(err);
    }

    const payload = <IUpdateIngredient>req.body;

    try {
      const ingredient = await this._service.UpdataIngredient(payload, { id });

      res.send({
        statusCode: 200,
        data: ingredient,
      });
    } catch (err) {
      next(err);
    }
  }

  async deleteIngredients(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;

    if (!id) {
      const err = new APIError(400, "BAD_REQUEST", "invalid url id param");
      next(err);
    }

    try {
      this._service.DeleteIngredient(id);

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

export default IngredientController;
