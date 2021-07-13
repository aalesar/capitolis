import { Transactions } from "./trans.model.js";

export const getAllTransactions = (req,res) => {
    var data = [];
    Transactions.forEach((value,key,map) => {
        value.forEach(element => {
            data.push({[key]:element});
        });
    });
    res.status(200).json(data).end();
}

export const addTransaction = (req,res) => {
    const counterparty = req.body.counterparty;
    const amount = req.body.amount;

    if(Transactions.get(counterparty) === undefined){
        Transactions.set(counterparty, [amount]);
    }
    else{
        Transactions.get(counterparty).push(amount);
    }

    res.status(200).end();
}