import { LoadBudgetPort } from '../ports/out/load-budget.port';
import { UpdateBudgetStatePort } from '../ports/out/update-budget-state.port';
import { DepositMoneyUseCase } from '../ports/in/deposit-money.use-case';
import { DepositMoneyCommand } from '../ports/in/deposit-money.command';
import { BudgetEntity } from '../entities/budget.entity';

export class DepositMoneyService implements DepositMoneyUseCase {
  constructor(
    private readonly _loadBudgetPort: LoadBudgetPort,
    private readonly _updateBudgetStatePort: UpdateBudgetStatePort,
  ) {}

  depositMoney(command: DepositMoneyCommand) {
    const budget: BudgetEntity = this._loadBudgetPort.loadBudget();

    if (!budget.withdraw(command.money)) {
      return false;
    }

    this._updateBudgetStatePort.updateActivities(budget);
  }
}
