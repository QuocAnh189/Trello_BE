import Joi from 'joi';

//util
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '@/utils';

//interface
import { IInvitation } from '@/interfaces';

const INVITATION_COLLECTION_NAME = 'invitations';
const INVITATION_COLLECTION_SCHEMA = Joi.object<IInvitation>({
  inviterId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  inviteeId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  type: Joi.string().required().min(3).max(50).trim().strict(),
  boardInvitation: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false),
});

export const invitationModel = {
  INVITATION_COLLECTION_NAME,
  INVITATION_COLLECTION_SCHEMA,
};
