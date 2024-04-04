import { Router } from 'express'

//interface
import { IRoutes } from '@/interfaces'

//controller
import { ColumnController } from '@/controllers'

//util
import { wrapRequestHandler } from '@/utils'

export default class ColumnRoute implements IRoutes {
  public router = Router()
  public column = new ColumnController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/', wrapRequestHandler(this.column.getColumns))
    this.router.get('/board/:id', wrapRequestHandler(this.column.getColumnByBoardId))
    this.router.get('/:id', wrapRequestHandler(this.column.getColumn))
    this.router.post('/', wrapRequestHandler(this.column.createColumn))
    this.router.patch('/:id', wrapRequestHandler(this.column.updateColumn))
    this.router.delete('/:id', wrapRequestHandler(this.column.deleteColumn))
  }
}
