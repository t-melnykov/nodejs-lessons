import express from 'express';
import comments_router from './comments.js';
import users_router from './users.js';
import root_router from './root.js';

const router = express.Router();

router.get('/', root_router);
router.use('/comments', comments_router);
router.use('/users', users_router);

export default router;
