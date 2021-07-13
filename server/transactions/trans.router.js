import { Router } from "express";
import { getAllTransactions, addTransaction } from './trans.controller.js';

const router = Router()

router.get('/', getAllTransactions)

router.post('/', addTransaction)

export default router;
