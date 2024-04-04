import { NextFunction, Request, Response } from 'express'

//service
import { CommentService } from '@/services'

export class CommentController {
  public comment = new CommentService()

  public getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public getComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public createComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public updateComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }
}
