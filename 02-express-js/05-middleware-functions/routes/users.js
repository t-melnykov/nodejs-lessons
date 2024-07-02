import express from 'express';
import * as users_controller from '../controllers/users.js';

const users_router = express.Router();

users_router.get('/:id?', users_controller.get_users);

users_router.post('/', users_controller.add_user);

users_router.put('/:id', users_controller.change_user);

export default users_router;
