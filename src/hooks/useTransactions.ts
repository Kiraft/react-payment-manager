import { useState } from "react";
import { TransactionsItem } from "../types";

export default function Transactions() {
    
    //Hooks
    const [transactions, setTransactions] = useState<TransactionsItem[]>([])

    return {
        transactions,
        setTransactions
    }    
}