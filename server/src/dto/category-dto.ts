export interface ICreateCategory {
  name: string;
  description: string;
}

export interface IGetCategoryByID {
  id: string;
}

export interface IUpdateCategory {
  name: string;
  description: string;
}

export type IPatchCategory = Partial<IUpdateCategory>
