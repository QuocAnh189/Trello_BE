import { NextFunction, Request, Response } from 'express'

//service
import { CommentService } from '@/services'

export class CommentController {
  public comment = new CommentService()

  public getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  }

  public getComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  }

  public createComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  }

  public updateComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  }

  public deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  }
}
