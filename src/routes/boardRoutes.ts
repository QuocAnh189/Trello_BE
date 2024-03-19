import { IRoutes } from '@/interfaces';
import { Router } from 'express';

class BoardRoute implements IRoutes {
  public router = Router();
  // public board = new BoardController();

  constructor() {
    // this.initialRoutes();
  }

  // private initialRoutes() {
  //   this.router.get('/:id', wrapRequestHandler(this.address.getAddress));
  // }
}
