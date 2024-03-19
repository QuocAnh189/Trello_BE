import Joi from 'joi';

//interface
import { IBoard } from '@/interfaces';

const BOARD_COLLECTION_NAME = 'boards';
const BOARD_COLLECTION_SCHEMA = Joi.object<IBoard>({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  description: Joi.string().required().min(3).max(255).trim().strict(),
  type: Joi.string().required().min(3).max(20).strict(),
  ownerIds: Joi.array().items(Joi.string()).default([]),
  memberIds: Joi.array().items(Joi.string()).default([]),
  columnsOrderIds: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false),
});

export const boardModel = { BOARD_COLLECTION_NAME, BOARD_COLLECTION_SCHEMA };
