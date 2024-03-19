import { Router } from 'express';

//interface
import { IRoutes } from '@/interfaces';

//controller
import { BoardController } from '@/controllers';

//util
import { wrapRequestHandler } from '@/utils';

export default class BoardRoute implements IRoutes {
  public router = Router();
  public board = new BoardController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', wrapRequestHandler(this.board.getBoards));
    this.router.get('/:id', wrapRequestHandler(this.board.getBoard));
    this.router.post('/:id', wrapRequestHandler(this.board.createBoard));
    this.router.patch('/:id', wrapRequestHandler(this.board.updateBoard));
    this.router.delete('/:id', wrapRequestHandler(this.board.deleteBoard));
  }
}
