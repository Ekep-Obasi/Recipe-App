import { NextFunction, Request, Response } from "express";
import { verifyTokenSignature } from "../../helpers/jwt";
import { APIError } from "../../helpers/errors/app-error";

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req.get("Authorization");

  const token = authorization?.split(" ").pop() as string;

  if (!token) {
    const err = new APIError(400, "BAD_REQUEST", "token is invalid");
    return next(err);
  }

  const user = await verifyTokenSignature(token);

  if (user) {
    req.user = user;

    next();
  } else {
    const err = new APIError(403, "UNAUTHORIZED", "Access is forbidden");
    next(err);
  }
}

export default AuthMiddleware;
