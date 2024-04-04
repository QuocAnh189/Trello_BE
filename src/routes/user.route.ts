import { Router } from 'express'

//interface
import { IRoutes } from '@/interfaces'

//controller
import { UserController } from '@/controllers'

//util
import { wrapRequestHandler } from '@/utils'

export default class UserRoute implements IRoutes {
  public router = Router()
  public user = new UserController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get('/', wrapRequestHandler(this.user.getUsers))
    this.router.get('/:id', wrapRequestHandler(this.user.getUser))
    this.router.post('/', wrapRequestHandler(this.user.createUser))
    this.router.patch('/:id', wrapRequestHandler(this.user.updateUser))
    this.router.delete('/:id', wrapRequestHandler(this.user.deleteUser))
  }
}
