import Joi from 'joi'

//util
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '@/utils'

//interface
import { IColumn } from '@/interfaces'

export const COLUMN_COLLECTION_SCHEMA = Joi.object<IColumn>({
  boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  title: Joi.string().required().min(3).max(50).trim().strict(),
  cardOrderIds: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})
