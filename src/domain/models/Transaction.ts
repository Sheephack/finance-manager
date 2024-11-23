export class Transaction {
  constructor(
    public id: string,
    public amount: number,
    public category: string,
    public date: Date,
  ) {}
}