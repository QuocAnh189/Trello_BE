import { NextFunction, Request, Response } from 'express'

//service
import { UserService } from '@/services'

export class UserController {
  public user = new UserService()

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }
}
