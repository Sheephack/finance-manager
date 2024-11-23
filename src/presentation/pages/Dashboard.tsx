import React, { useEffect, useState } from 'react';
import { FetchTransactions } from '../../application/usecases/transaction/FetchTransactions';
import { TransactionAPI } from '../../infrastructure/api/TransactionAPI';
import { Transaction } from '../../domain/models/Transaction';
import AddTransactionForm from '../components/AddTransactionForm';
import { useTransactionStore } from '../../store/useTransactionStore';

const Dashboard = () => {
    // const [transactions, setTransactions] = useState<Transaction[]>([]);
    const { transactions } = useTransactionStore();
    
    // useEffect(() => {
    //     const fetchTransactions = async () => {
    //         const transactionRepo = new TransactionAPI();
    //         const fetchUseCase = new FetchTransactions(transactionRepo);
    //         const result = await fetchUseCase.execute();
    //         setTransactions(result);
    //     };
    //     fetchTransactions();
    // }, []);

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <AddTransactionForm />
            <ul className='space-y-2'>
                {transactions.map((t) => (
                    <li key={t.id} className='border p-2 rounded shadow'>
                        {t.category}: {t.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;