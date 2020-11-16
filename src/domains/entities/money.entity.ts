import { BigNumber } from 'bignumber.js';

export class MoneyEntity {
  constructor(private readonly _amount: BigNumber) {}

  static ZERO() {
    return new MoneyEntity(new BigNumber(0));
  }

  of(value: number) {
    return new MoneyEntity(new BigNumber(value));
  }

  public get amout(): BigNumber {
    return this._amount;
  }

  static add(a: MoneyEntity, b: MoneyEntity) {
    return new MoneyEntity(a.amout.plus(b.amout));
  }

  negate() {
    return new MoneyEntity(this.amout.negated());
  }

  isPositiveOrZero() {
    return this.amout.comparedTo(0) >= 0;
  }
}
