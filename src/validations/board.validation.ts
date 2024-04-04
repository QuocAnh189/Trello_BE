import Joi from 'joi'
import { NextFunction, Request, Response } from 'express'
import { HTTP_STATUS } from '@/constants'

export const createNew = async (req: Request, res: Response, next: NextFunction) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required',
      'string.empty': 'Title is not allowed to be empty',
      'string.min': 'Title length must be at least 3 characters long',
      'string.max': 'Title length must be less than or equal to 5 characters long',
      'string.trim': 'Title is not have leading or trailing whitespace characters'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })

  try {
    console.log(req.body)

    await correctCondition.validateAsync(req.body, { abortEarly: false })

    next()
    res.status(HTTP_STATUS.CREATED).json({ message: 'POST: API create new board' })
  } catch (error) {
    next(error)
  }
}

export const boardValidation = () => {
  createNew
}
