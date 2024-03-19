import { NextFunction, Request, Response } from 'express';

//service
import { AuthService } from '@/services';

//constant
import { HTTP_STATUS } from '@/constants';

export class AuthController {
  public auth = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.auth.signUp();
      res.status(HTTP_STATUS.OK).json(result);
    } catch {}
  };
  public signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
  public signOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
  public forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
  public resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
}
