import { Service } from 'typedi';
import { ObjectId } from 'mongodb';
import { GET_DB } from '@/configs';

//constant
import { HTTP_STATUS } from '@/constants';

//exception
import { HttpException } from '@/exceptions/httpException';

//interface
import { IBoard } from '@/interfaces';

//lodash
import { cloneDeep, String } from 'lodash';

//model
import { boardModel, cardModel, columnModel } from '@/models';
import { slugify } from '@/utils';

@Service()
export class BoardService {
  public async getBoards(): Promise<IBoard[]> {
    try {
      return [];
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async getBoard(id: string): Promise<IBoard> {
    try {
      const board = await GET_DB()
        .collection(boardModel.BOARD_COLLECTION_NAME)
        .findOne({ _id: new ObjectId(id) });
      if (!board) {
        throw new HttpException(HTTP_STATUS.NOT_FOUND, `Board not found`);
      }

      // const result = await GET_DB()
      //   .collection(boardModel.BOARD_COLLECTION_NAME)
      //   .aggregate([
      //     { $match: { _id: new ObjectId(id.trim()), _destroy: false } },
      //     {
      //       $lookup: {
      //         from: columnModel.COLUMN_COLLECTION_NAME,
      //         localField: '_id',
      //         foreignField: 'boardId',
      //         as: 'columns',
      //       },
      //     },
      //     {
      //       $lookup: {
      //         from: cardModel.CARD_COLLECTION_NAME,
      //         localField: '_id',
      //         foreignField: 'boardId',
      //         as: 'cards',
      //       },
      //     },
      //   ])
      //   .toArray();

      // const board = cloneDeep(result[0]);

      // board.columns.forEach(column => {
      //   column.cards = board.cards.filter(card => card.columnId.equals(column._id));
      // });

      // delete board.cards;

      // if (!board) {
      //   throw new HttpException(HTTP_STATUS.NOT_FOUND, `Board not found`);
      // }

      return board;
    } catch (e) {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async createBoard(data: any): Promise<IBoard | any> {
    try {
      const newBoard = {
        ...data,
        slug: slugify(data.title),
        columnsOrderIds: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        _destroy: false,
      };
      const createdBoard = await GET_DB().collection(boardModel.BOARD_COLLECTION_NAME).insertOne(newBoard);
      const board = await GET_DB()
        .collection(boardModel.BOARD_COLLECTION_NAME)
        .findOne({ _id: createdBoard.insertedId });

      return board;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async updateBoard(): Promise<IBoard> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }

  public async deleteBoard(): Promise<any> {
    try {
      return null;
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`);
    }
  }
}
