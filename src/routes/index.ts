import { Router } from 'express';
import { PATHS } from '@/constants';

import AuthRoute from './auth.route';
import BoardRoute from './board.route';
import CardRoute from './card.route';
import ColumnRoute from './column.route';
import CommentRoute from './comment';
import InvitationRoute from './ivitation.route';
import UserRoute from './user.route';

const route = Router();

route.use(PATHS.AUTH, new AuthRoute().router);
route.use(PATHS.BOARD, new BoardRoute().router);
route.use(PATHS.CARD, new CardRoute().router);
route.use(PATHS.COLUMN, new ColumnRoute().router);
route.use(PATHS.COMMENT, new CommentRoute().router);
route.use(PATHS.INVITATION, new InvitationRoute().router);
route.use(PATHS.USER, new UserRoute().router);

export default route;
