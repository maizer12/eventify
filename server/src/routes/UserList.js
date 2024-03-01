import express from 'express';
import UserListController from '../controllers/UserListController.js';

const router = express.Router();

router.get('/', UserListController.get);

export default router;
