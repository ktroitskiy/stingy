import { MoneyEntity } from './money.entity';

export enum ActivityTypes {
  Deposit = 'DEPOSIT',
  Withdraw = 'WITHDRAW',
}

export class ActivityEntity {
  constructor(
    private readonly _type: ActivityTypes,
    private readonly _money: MoneyEntity,
    private readonly _timestamp: Date,
  ) {}

  public get timestamp(): Date {
    return this._timestamp;
  }

  public get money(): MoneyEntity {
    return this._money;
  }

  public get type(): ActivityTypes {
    return this._type;
  }
}
