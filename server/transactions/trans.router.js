import { Router } from "express";
import { getAllTransactions, addTransaction, compressTransactions } from './trans.controller.js';

const router = Router()

router.get('/transactions/', getAllTransactions)

router.post('/transactions/', addTransaction)

router.put('/transactions/', compressTransactions)

export default router;
