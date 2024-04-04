import { Service } from 'typedi'

//constant
import { HTTP_STATUS, SCHEMA_NAME } from '@/constants'

//exception
import { HttpException } from '@/exceptions/httpException'

//interface
import { IAuth } from '@/interfaces'
import { CONNECT_DB, GET_DB } from '@/configs'

@Service()
export class AuthService {
  public async signUp(data: any): Promise<IAuth | any> {
    try {
      const newUser = {
        ...data,        
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      const createdUser = await GET_DB().collection(SCHEMA_NAME.USER).insertOne(newUser);
      const user = await GET_DB().collection(SCHEMA_NAME.USER).findOne({ _id: createdUser.insertedId })

      return user
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async signIn(data: any): Promise<IAuth> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async signOut(data: any): Promise<IAuth> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async forgotPassword(data: any): Promise<IAuth> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }

  public async resetPassword(data: any): Promise<IAuth> {
    try {
      return null
    } catch {
      throw new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, `Server error`)
    }
  }
}
