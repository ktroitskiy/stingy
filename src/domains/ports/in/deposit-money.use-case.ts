import { DepositMoneyCommand } from './deposit-money.command';

export interface DepositMoneyUseCase {
  depositMoney(command: DepositMoneyCommand);
}
