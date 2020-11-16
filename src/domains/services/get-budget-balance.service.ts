import { GetBudgetBalanceQuery } from '../ports/in/get-budget-balance.query';
import { LoadBudgetPort } from '../ports/out/load-budget.port';

export class GetBudgetBalanceService implements GetBudgetBalanceQuery {
  constructor(private readonly _loadBudgetPort: LoadBudgetPort) {}

  getBalance() {
    this._loadBudgetPort.loadBudget().calculateBalance();
  }
}
