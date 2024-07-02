import express from 'express';
import * as comments_controller from '../controllers/comments.js';

const comments_router = express.Router();

comments_router.get(
    '/:id?',
    comments_controller.pre_get_comments,
    comments_controller.get_comments
);

// comments_router.get('/:id', comments_controller.get_comment);

comments_router.post('/', comments_controller.add_comment);

comments_router.put('/:id', comments_controller.change_comment);

export default comments_router;
