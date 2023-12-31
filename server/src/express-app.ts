import express, { Express } from 'express'
import cors from 'cors'
import path from 'path'
import { CategoryRouter, userRouter, drinkRouter, glassRouter, ingredientRouter } from './routes'
import ErrorHandler from './helpers/errors/error-handler'

const startServer = (app: Express) => {
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(process.cwd(), '/public')))

  // routes
  app.use('/user', userRouter)
  app.use('/drink', drinkRouter)
  app.use('/glass', glassRouter)
  app.use('/category', CategoryRouter)
  app.use('/ingredient', ingredientRouter)

  // Error Handling
  app.use(ErrorHandler)

  app.on('error', (error) => {
    console.error(error)
    process.exit(1)
  })
}

export default startServer
