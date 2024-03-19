import { NextFunction, Request, Response } from 'express';

//service
import { InvitationService } from '@/services';

export class InvitationController {
  public invitation = new InvitationService();

  public getInvitations = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public getInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public createInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public updateInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };

  public deleteInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch {}
  };
}
