import Joi from 'joi'

//interface
import { IUser } from '@/interfaces'

export const USER_COLLECTION_SCHEMA = Joi.object<IUser>({
  email: Joi.string().required().min(3).max(50).trim().strict(),
  username: Joi.string().required().min(3).max(30).trim().strict(),
  password: Joi.string().required().min(3).max(30).trim().strict(),
  displayName: Joi.string().required().min(3).max(30).trim().strict(),
  avatar: Joi.string().required().min(3).max(255).trim().strict(),
  role: Joi.string().required().min(3).max(30).trim().strict(),
  isActive: Joi.boolean().default(true),
  verifyToken: Joi.boolean().default(false),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null)
})
