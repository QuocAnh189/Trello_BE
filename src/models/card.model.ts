import Joi from 'joi'

//util
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '@/utils'

//interface
import { IAttackment, ICard } from '@/interfaces'

export const ATTACKMENT_COLLECTION_SCHEMA = Joi.object<IAttackment>({
  fileName: Joi.string().required().min(3).max(255).trim().strict(),
  fileType: Joi.string().required().min(3).max(255).trim().strict(),
  fileURL: Joi.string().required().min(3).max(255).trim().strict(),
  createdAt: Joi.date().timestamp('javascript').default(Date.now)
})

export const CARD_COLLECTION_SCHEMA = Joi.object<ICard>({
  boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  columnId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  title: Joi.string().required().min(3).max(50).trim().strict(),
  cover: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().optional(),
  memberIds: Joi.array().items(Joi.string()).default([]),
  commentIds: Joi.array().items(Joi.string()).default([]),
  attackmentsIds: Joi.array().items(ATTACKMENT_COLLECTION_SCHEMA).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})
