import { NextFunction, Request, Response } from 'express'

//service
import { ColumnService } from '@/services'
import { HTTP_STATUS } from '@/constants'

export class ColumnController {
  public column = new ColumnService()

  public getColumns = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public getColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public getColumnByBoardId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const columns = await this.column.getColumnByBoardId(id)

      res.status(HTTP_STATUS.OK).json(columns)
    } catch (error) {
      next(error)
    }
  }

  public createColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const newColumn = await this.column.createColumn(data)

      res.status(HTTP_STATUS.CREATED).json(newColumn)
    } catch (error) {
      next(error)
    }
  }

  public updateColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public deleteColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const deleteColumn = await this.column.deleteColumn(id)

      res.status(200).json(deleteColumn)
    } catch (error) {
      next(error)
    }
  }
}
