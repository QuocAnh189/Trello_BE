import { NextFunction, Request, Response } from 'express';

//service
import { CardService } from '@/services';

export class CardController {
  public card = new CardService();

  public getCards = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public getCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public createCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
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
