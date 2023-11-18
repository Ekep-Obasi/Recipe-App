import { NextFunction, Request, Response } from "express";
import UserRepository from "../../database/repositories/user-repository";
import { APIError } from "../../helpers/errors/app-error";

async function RoleMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = req.user;

  const repo = new UserRepository();

  const savedUser = await repo.FindOneUser({ email: user.email });

  if (!savedUser) {
    throw new APIError();
  }

  if (savedUser.role === "ADMIN_USER") {
    next();
  } else {
    res.send({
      statusCode: 404,
      data: [],
      error: "Access forbidden",
    });
  }
}

export default RoleMiddleware;
