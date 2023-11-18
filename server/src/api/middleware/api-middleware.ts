import { NextFunction, Request, Response } from "express";
import { APIError } from "../../helpers/errors/app-error";
import UserRepository from "../../database/repositories/user-repository";
import { ILoginUserPayload } from "../../dto/user-dto";

declare global {
  namespace Express {
    interface Request {
      user: ILoginUserPayload;
    }
  }
}

async function ApiMiddleware(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.header("x-api-key");
  const { email } = req.user;
  const User = new UserRepository();

  const user = await User.FindOneUser({ email });

  if (!user) {
    throw new APIError();
  }

  if (!apiKey || user.apiKey !== apiKey) {
    throw new APIError(403, "UNAUTHORIZED", "access forbidden");
  }

  next();
}

export default ApiMiddleware;
