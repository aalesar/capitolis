import express from 'express'
import { json } from 'body-parser'
import transactionRouter from './transactions/trans.router.js'

const PORT = process.env.PORT || 3333;

const app = express();

app.use(json())
app.use('/api', transactionRouter)
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });