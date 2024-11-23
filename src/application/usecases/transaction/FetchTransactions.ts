import { TransactionRepository } from '../../../domain/repositories/TransactionRepository';

export class FetchTransactions {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute() {
    return this.transactionRepository.getAll();
  }
}