import { Router } from 'express';

//interface
import { IRoutes } from '@/interfaces';

//controller
import { InvitationController } from '@/controllers';

//util
import { wrapRequestHandler } from '@/utils';

export default class InvitationRoute implements IRoutes {
  public router = Router();
  public invitation = new InvitationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', wrapRequestHandler(this.invitation.getInvitations));
    this.router.get('/:id', wrapRequestHandler(this.invitation.getInvitation));
    this.router.post('/:id', wrapRequestHandler(this.invitation.createInvitation));
    this.router.patch('/:id', wrapRequestHandler(this.invitation.updateInvitation));
    this.router.delete('/:id', wrapRequestHandler(this.invitation.deleteInvitation));
  }
}
