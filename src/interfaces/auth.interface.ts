import { IUser } from './user.interface'

export interface IAuth {
  user: IUser
  accessToken: string
  refreshToken: string
}

export enum ERole {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  VIEWER = 'VIEWER'
}

export enum ETokenType {
  REFRESH = 'REFRESH',
  ACCESS = 'ACCESS'
}

export interface DataStoredInToken {
  id: string
  role: ERole
  type: ETokenType
}

export interface TokenData {
  token: string
  expiresIn: number | string
}

export interface TokenPayload {
  accessToken: string
  refreshToken: string
}

export interface RequestWithUser extends Request {
  user: IUser
}
