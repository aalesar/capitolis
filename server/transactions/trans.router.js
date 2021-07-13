import { Router } from "express";
import { getAllTransactions, addTransaction, compressTransactions } from './trans.controller.js';

const router = Router()

router.get('/', getAllTransactions)

router.post('/', addTransaction)

router.put('/', compressTransactions)

export default router;
