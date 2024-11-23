import { Transaction } from '../../domain/models/Transaction';
import { TransactionRepository } from '../../domain/repositories/TransactionRepository';
import { mockTransactions } from './mockServer';

interface TransactionAPIResponse {
    id: string;
    amount: number;
    category: string;
    date: string;
}

export class TransactionAPI implements TransactionRepository {
  async getAll(): Promise<Transaction[]> {
        // const response = await fetch("/api/transactions");
        // const data: TransactionAPIResponse[] = await response.json();
        // return data.map(
        return mockTransactions.map(
            (item) => 
                new Transaction(
                    item.id,
                    item.amount, 
                    item.category, 
                    new Date(item.date))
        );   
    }

    async create(transaction: Transaction): Promise<void> {
        await fetch("/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transaction)
        });
    }
}