import { Router } from 'express'

//interface
import { IRoutes } from '@/interfaces'

//controller
import { AuthController } from '@/controllers'

//util
import { wrapRequestHandler } from '@/utils'

export default class AuthRoute implements IRoutes {
  public router = Router()
  public auth = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post('/signup', wrapRequestHandler(this.auth.signUp))
    this.router.post('/signin', wrapRequestHandler(this.auth.signIn))
    this.router.delete('/signout', wrapRequestHandler(this.auth.signOut))
    this.router.post('/forgot-password', wrapRequestHandler(this.auth.forgotPassword))
    this.router.patch('/reset-password', wrapRequestHandler(this.auth.resetPassword))
  }
}
