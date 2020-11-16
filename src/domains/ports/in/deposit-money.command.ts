import { MoneyEntity } from 'src/domains/entities/money.entity';

export class DepositMoneyCommand {
  constructor(private readonly _money: MoneyEntity) {}

  public get money(): MoneyEntity {
    return this._money;
  }
}
