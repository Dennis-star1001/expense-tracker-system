import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                   <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </>
    )
}
