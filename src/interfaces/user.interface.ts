export interface IUser {
  _id?: string
  email: string
  username: string
  password: string
  displayName: string
  avatar: string
  role: string
  isActive: boolean
  verifyToken: boolean
  createdAt: Date
  updatedAt: Date
}
