import { Category } from '../domains/category'

export type ICreateCategory = Omit<Category, 'id'>

export type IUpdateCategory = Required<ICreateCategory>

export type IPatchCategory = Partial<IUpdateCategory>
