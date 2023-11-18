import { ILoginUserPayload } from "./dto/user-dto";

export declare global {
  namespace Express {
    interface Request {
      user: ILoginUserPayload;
    }
  }
}
