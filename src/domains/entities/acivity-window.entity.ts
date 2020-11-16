import { ActivityEntity, ActivityTypes } from './activity.entity';
import { MoneyEntity } from './money.entity';

export class ActivityWindowEntity {
  private readonly _activities: ActivityEntity[] = [];

  public get activities(): ActivityEntity[] {
    return this._activities;
  }

  addActivity(activity: ActivityEntity) {
    this.activities.push(activity);
    return this;
  }

  public calculateBalance(): MoneyEntity {
    const depositeBalance = this.activities
      .filter((activity) => activity.type === ActivityTypes.Deposit)
      .map((activity) => activity.money)
      .reduce(MoneyEntity.add, MoneyEntity.ZERO());

    const withdrawnBalance = this.activities
      .filter((activity) => activity.type === ActivityTypes.Withdraw)
      .map((activity) => activity.money)
      .reduce(MoneyEntity.add, MoneyEntity.ZERO());

    return MoneyEntity.add(depositeBalance, withdrawnBalance.negate());
  }
}
