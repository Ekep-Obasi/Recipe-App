import { Glass } from "../domains/glass";

export type ICreateGlass = Omit<Glass, "id">;

export type IUpdateGlass = Partial<ICreateGlass>;

export type IPutGlass = Required<ICreateGlass>;
