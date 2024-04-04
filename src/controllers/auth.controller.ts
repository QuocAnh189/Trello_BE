import { NextFunction, Request, Response } from 'express'

//service
import { AuthService } from '@/services'

//constant
import { HTTP_STATUS } from '@/constants'

export class AuthController {
  public auth = new AuthService()

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await this.auth.signUp(data)
      res.status(HTTP_STATUS.CREATED).json(result)
    } catch (error) {
      next(error)
    }
  }

  public signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await this.auth.signIn(data)
      res.status(HTTP_STATUS.OK).json(result)
    } catch (error) {
      next(error)
    }
  }

  public signOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await this.auth.signOut(data)
      res.status(HTTP_STATUS.OK).json(result)
    } catch (error) {
      next(error)
    }
  }

  public forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await this.auth.forgotPassword(data)
      res.status(HTTP_STATUS.OK).json(result)
    } catch (error) {
      next(error)
    }
  }

  public resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await this.auth.forgotPassword(data)
      res.status(HTTP_STATUS.OK).json(result)
    } catch (error) {
      next(error)
    }
  }
}
