import express, { Express, NextFunction, Request, Response } from 'express'
import startServer from './express-app'
import { PORT_NUMBER } from './constants'
import { dbTest } from './database'

;(async () => {
  const app: Express = express()

  console.clear()

  startServer(app)

  await dbTest()

  app.listen(PORT_NUMBER, () => {
    console.log(`Server is listening on port --> ${PORT_NUMBER}            ✅`)
  })
})()
