import axios from "axios";

const restInstance = axios.create({
    baseURL: "http://localhost:3333/api"
})

export const fetchTransactions = async() =>{
    return restInstance.get(`/transactions/`)
            .then((response)=>{
                return response.data;
            })
}

fetchTransactions.key = "get-transactions";

export const addTransaction = async (data) =>{
    console.log(data);
    const transactionData = await restInstance
        .post(`/transactions/`, {
            counterparty: data.counterparty,
            amount: data.amount
        })
        .then((response)=>{
            return response.data;
        });

        return transactionData;
};

addTransaction.key = "add-transaction";

export const compressTransactions = async () =>{
    const compressedData = await restInstance
        .put(`/transactions/`)
        .then((response)=>{
            console.log(response);
            return response.data;
        });
    return compressedData;
}

compressTransactions.key = "compress-transactions";

