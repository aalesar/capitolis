import React from "react"
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import {TransactionProvider} from "./components/TransactionContext"
import Operations from "./components/Operations"
import Transactions from "./components/Transactions";

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
      <TransactionProvider>
        <Transactions/>
      </TransactionProvider>
  );
}

export default App;
