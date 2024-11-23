import { Transaction } from "../models/Transaction";

export interface TransactionRepository {
    getAll(): Promise<Transaction[]>;
    create(transaction: Transaction): Promise<void>;
}