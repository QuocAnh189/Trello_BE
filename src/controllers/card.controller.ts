import { NextFunction, Request, Response } from 'express';

//service
import { CardService } from '@/services';
import { HTTP_STATUS } from '@/constants';

export class CardController {
  public card = new CardService();

  public getCards = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public getCardsByColumnId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const cards = await this.card.getCardsByColumnId(id);
      res.status(HTTP_STATUS.OK).json(cards);
    } catch {}
  };

  public getCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public createCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const card = await this.card.createCard(data);

      res.status(HTTP_STATUS.CREATED).json(card);
    } catch (error) {
      next(error);
    }
  };

  public updateCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public deleteCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
}
