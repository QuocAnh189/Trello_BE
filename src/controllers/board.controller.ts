import { NextFunction, Request, Response } from 'express';

//service
import { BoardService } from '@/services';
import { HTTP_STATUS } from '@/constants';
import { error } from 'console';

export class BoardController {
  public board = new BoardService();

  public getBoards = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (next) {
      next(error);
    }
  };

  public getBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const board = await this.board.getBoard(id);

      res.status(HTTP_STATUS.OK).json(board);
    } catch (error) {
      next(error);
    }
  };

  public createBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const board = await this.board.createBoard(data);

      res.status(HTTP_STATUS.CREATED).json(board);
    } catch (next) {
      next(error);
    }
  };

  public updateBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (next) {
      next(error);
    }
  };

  public deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (next) {
      next(error);
    }
  };
}
