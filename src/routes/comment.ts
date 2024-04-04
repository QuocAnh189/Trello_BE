import { Router } from 'express'

//interface
import { IRoutes } from '@/interfaces'

//controller
import { CommentController } from '@/controllers'

//util
import { wrapRequestHandler } from '@/utils'

export default class CommentRoute implements IRoutes {
  public router = Router()
  public comment = new CommentController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/', wrapRequestHandler(this.comment.getComments))
    this.router.get('/:id', wrapRequestHandler(this.comment.getComment))
    this.router.post('/', wrapRequestHandler(this.comment.createComment))
    this.router.patch('/:id', wrapRequestHandler(this.comment.updateComment))
    this.router.delete('/:id', wrapRequestHandler(this.comment.deleteComment))
  }
}
