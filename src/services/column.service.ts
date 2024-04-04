import { ObjectId } from 'mongodb'
import { HTTP_STATUS, SCHEMA_NAME } from '@/constants'
import { HttpException } from '@/exceptions/httpException'
import { IColumn } from '@/interfaces'
import { Service } from 'typedi'
import { GET_DB } from '@/configs'

@Service()
export class ColumnService {
  public async getColumns(): Promise<IColumn[]> {
    try {
      return []
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async getColumn(): Promise<IColumn> {
    try {
      return
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async getColumnByBoardId(id: string): Promise<IColumn[]> {
    try {
      const columns = await GET_DB()
        .collection(SCHEMA_NAME.COLUMN)
        .find({ boardId: new ObjectId(id) })
        .toArray()

      return columns
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async createColumn(data: IColumn): Promise<IColumn> {
    try {
      const newColumn = {
        ...data,
        boardId: new ObjectId(data.boardId),
        cardOrderIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        _destroy: false
      }
      const createdColumn = await GET_DB().collection(SCHEMA_NAME.COLUMN).insertOne(newColumn)
      const column = await GET_DB().collection(SCHEMA_NAME.COLUMN).findOne({ _id: createdColumn.insertedId })

      await GET_DB()
        .collection(SCHEMA_NAME.BOARD)
        .findOneAndUpdate(
          { _id: column.boardId },
          { $push: { columnOrderIds: column._id } },
          { returnDocument: 'after' }
        )

      return column
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async updateColum(): Promise<IColumn> {
    try {
      return
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async deleteColumn(id: string): Promise<any> {
    try {
      const column = await GET_DB()
        .collection(SCHEMA_NAME.COLUMN)
        .findOne({ _id: new ObjectId(id) })

      await GET_DB()
        .collection(SCHEMA_NAME.COLUMN)
        .deleteOne({ _id: new ObjectId(id) })

      await GET_DB()
        .collection(SCHEMA_NAME.CARD)
        .deleteMany({ columnId: new ObjectId(id) })

      await GET_DB()
        .collection(SCHEMA_NAME.BOARD)
        .findOneAndUpdate(
          { _id: column.boardId },
          { $pull: { columnOrderIds: column._id } },
          { returnDocument: 'after' }
        )

      return { deleteResult: 'Column and its card deleted successfully' }
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }
}
