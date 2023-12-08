import { NextFunction, Request, Response } from 'express'
import CategoryService from '../../services/category-service'
import { ICreateCategory, IUpdateCategory } from '../../dto/category-dto'
import { APIError } from '../../helpers/errors/app-error'

interface ICategoryController {
  _service: CategoryService
}

class CategoryController implements ICategoryController {
  readonly _service

  constructor() {
    this._service = new CategoryService()
  }

  async bulkCreateCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body

      const categories = await this._service.BulkCreateCategories(payload)

      res.send({
        statusCode: 200,
        data: categories,
      })
    } catch (err) {
      next(err)
    }
  }

  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const newCategory = <ICreateCategory>req.body
      const category = await this._service.createCategory(newCategory)
      res.send({ statusCode: 200, data: category })
    } catch (err) {
      next(new APIError())
    }
  }

  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await this._service.getAllCategories()
      res.send({ statusCode: 200, data: categories })
    } catch (error) {
      res.send({ statusCode: 500, data: [], error })
    }
  }

  async getSelectedCategory(req: Request, res: Response) {
    try {
      const categories = await this._service.getSelectedCategory(req.params.id)
      res.send({ statusCode: 200, data: categories })
    } catch (error) {
      res.send({ statusCode: 500, data: [], error })
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const updatedCategory = <IUpdateCategory>req.body
      const categories = await this._service.updateCategory(req.params.id, updatedCategory)
      res.send({ statusCode: 200, data: categories })
    } catch (error) {
      res.send({ statusCode: 500, data: [], error })
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const categories = await this._service.deleteCategory(req.params.id)
      res.send({ statusCode: 200, data: categories })
    } catch (error) {
      res.send({ statusCode: 500, data: [], error })
    }
  }
}

export default CategoryController
