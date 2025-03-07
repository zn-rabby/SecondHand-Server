import express from 'express';


import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { TransactionController } from './transactions.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  TransactionController.createTransactionController
);


router.get(
  '/purchases/:userId',
  auth(USER_ROLE.user),
  TransactionController.getUserPurchases
);

router.get(
  '/sales/:userId',
  auth(USER_ROLE.user),
  TransactionController.getUserSales
);

router.patch(
  '/:id',
  auth(USER_ROLE.user),
  TransactionController.updateTransactionStatus
);



export const TransactionRoutes = router;
