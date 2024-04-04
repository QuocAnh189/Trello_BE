import { Router } from 'express'

//interface
import { IRoutes } from '@/interfaces'

//controller
import { AuthController } from '@/controllers'

//util
import { wrapRequestHandler } from '@/utils'

//middleware
import { ValidationMiddleware } from '@/middlewares/validation.middlewares'

//dto
import { ForgotPasswordDto, ResetPasswordDto, SignInDto, SignOutDto, SignUpDto } from '@/dtos'

export default class AuthRoute implements IRoutes {
  public router = Router()
  public auth = new AuthController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post('/signup', ValidationMiddleware(SignUpDto), wrapRequestHandler(this.auth.signUp))
    this.router.post('/signin', ValidationMiddleware(SignInDto), wrapRequestHandler(this.auth.signIn))
    this.router.post('/signout', ValidationMiddleware(SignOutDto), wrapRequestHandler(this.auth.signOut))
    this.router.post('/forgot-password', ValidationMiddleware(ForgotPasswordDto), wrapRequestHandler(this.auth.forgotPassword))
    this.router.patch('/reset-password', ValidationMiddleware(ResetPasswordDto), wrapRequestHandler(this.auth.resetPassword))
  }
}
