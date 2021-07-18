import React from "react"
import { useQuery, QueryClientProvider ,QueryClient} from "react-query";
import { fetchTransactions } from "../Services/api";
import {Spin} from "antd";
import TransactionContainer from "./TransactionContainer";
import Operations from './Operations';

const queryClient = new QueryClient();

function Transactions() {
    const { isLoading, isError, data, error } = useQuery(
      fetchTransactions.key,
      fetchTransactions
    );
  
    if (isLoading) return <Spin/>;
  
    if (error) return "An error has occurred: " + error.message;
  
    return <>
            <TransactionContainer data={data} query={queryClient} />
           </>
  }

export default () => (
    <QueryClientProvider client={queryClient}>
                <Transactions/>
    </QueryClientProvider>
);