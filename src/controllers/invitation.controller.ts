import { NextFunction, Request, Response } from 'express'

//service
import { InvitationService } from '@/services'

export class InvitationController {
  public invitation = new InvitationService()

  public getInvitations = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public getInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public createInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public updateInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }

  public deleteInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error)
    }
  }
}
