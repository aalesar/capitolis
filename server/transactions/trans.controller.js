import { Transactions } from "./trans.model.js";

export const getAllTransactions = (req,res) => {
    var data = [];
    Transactions.forEach((value,key,map) => {
        value.forEach(element => {
            data.push({ "name":key, "amount":element });
        });
    });
    console.log(data);
    res.status(200).json(data).end();
}

export const addTransaction = (req,res) => {
    var counterparty = req.body.counterparty;
    var amount = req.body.amount;
    console.log(counterparty , amount);
    if(Transactions.get(counterparty) === undefined){
        Transactions.set(counterparty, [amount]);
    }
    else{
        Transactions.get(counterparty).push(amount);
    }

    res.status(200).end();
}

export const compressTransactions = (req,res) => {
    Transactions.forEach((value,key,map) => {
        var tempVal = value
                        .map(Number)
                        .reduce((accumulator, current) => accumulator + current,0);
        Transactions.set(key, [tempVal.toString()]);
    });
    var data = [];
    Transactions.forEach((value,key,map) => {
        value.forEach(element => {
            data.push({ "name":key, "amount":element });
        });
    });
    console.log(data);
    res.status(200).json(data).end();
}