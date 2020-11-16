import { MoneyEntity } from './money.entity';
import { ActivityWindowEntity } from './acivity-window.entity';
import { ActivityEntity, ActivityTypes } from './activity.entity';

export class BudgetEntity {
  constructor(
    private readonly _balance: MoneyEntity,
    private readonly _activityWindow: ActivityWindowEntity,
  ) {}

  private _mayWithdrawMoney(money: MoneyEntity) {
    return MoneyEntity.add(
      this.calculateBalance(),
      money.negate(),
    ).isPositiveOrZero();
  }

  public get balance(): MoneyEntity {
    return this._balance;
  }

  public get activityWindow(): ActivityWindowEntity {
    return this._activityWindow;
  }

  public calculateBalance(): MoneyEntity {
    return MoneyEntity.add(
      this.balance,
      this.activityWindow.calculateBalance(),
    );
  }

  public withdraw(money: MoneyEntity): boolean {
    if (!this._mayWithdrawMoney(money)) {
      return false;
    }

    const withdrawl: ActivityEntity = new ActivityEntity(
      ActivityTypes.Withdraw,
      money,
      new Date(),
    );

    this._activityWindow.addActivity(withdrawl);
    return true;
  }

  public deposit(money: MoneyEntity): boolean {
    const deposit: ActivityEntity = new ActivityEntity(
      ActivityTypes.Withdraw,
      money,
      new Date(),
    );

    this._activityWindow.addActivity(deposit);
    return true;
  }
}
