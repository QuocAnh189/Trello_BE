import { NextFunction, Request, Response } from 'express';

//service
import { ColumnService } from '@/services';

export class ColumnController {
  public column = new ColumnService();

  public getColumns = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public getColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public createColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public updateColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public deleteColumn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
}
