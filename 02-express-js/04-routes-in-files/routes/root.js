import express from 'express';
import { get_root } from '../controllers/root.js';

const router = express.Router();

router.get('/', get_root);

export default router;
