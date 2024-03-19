import { NextFunction, Request, Response } from 'express';

//service
import { BoardService } from '@/services';

export class BoardController {
  public board = new BoardService();

  public getBoards = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public getBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public createBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public updateBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
}
