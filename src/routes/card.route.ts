import { Router } from 'express'

//interface
import { IRoutes } from '@/interfaces'

//controller
import { CardController } from '@/controllers'

//util
import { wrapRequestHandler } from '@/utils'

export default class CardRoute implements IRoutes {
  public router = Router()
  public card = new CardController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/:id', wrapRequestHandler(this.card.getCard))
    this.router.get('/column/:id', wrapRequestHandler(this.card.getCardsByColumnId))
    this.router.get('/:id', wrapRequestHandler(this.card.getCard))
    this.router.post('/', wrapRequestHandler(this.card.createCard))
    this.router.patch('/:id', wrapRequestHandler(this.card.updateCard))
    this.router.delete('/:id', wrapRequestHandler(this.card.deleteCard))
  }
}
