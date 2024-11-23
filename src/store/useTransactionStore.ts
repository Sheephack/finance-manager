import { create } from 'zustand';
import { Transaction } from '../domain/models/Transaction';

// type Transaction = {
//     id: string;
//     amount: number;
//     category: string;
//     date: Date;
// };

interface TransactionState {
    transactions: Transaction[];
    addTransaction: (transactions: Transaction[]) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
    transactions: [],
    addTransaction: (transaction) => 
        set((state) => ({ transactions: [...state.transactions, ...transaction] })),
}));