import { Drink } from '../domains/drink'

export type ICreateDrink = Omit<Drink, 'glasses' | 'ingredients' | 'categories'>

export type ICreateDrinkPayload = {
  name: string
  description: string
  imageURL: string
  recipe: string
  userId: number
  isAlcoholic: boolean
  price: string
  likes: number
  categoryIds: number[]
  ingredientIds: number[]
}

export type IUpdateDrink = Omit<ICreateDrink, 'id' | 'userId'>

export type IUpdateDrinkPayload = Partial<IUpdateDrink>

export type IPutDrinkPayload = Required<IUpdateDrinkPayload>
