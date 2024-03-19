import { NextFunction, Request, Response } from 'express';

//service
import { UserService } from '@/services';

export class UserController {
  public user = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
}
