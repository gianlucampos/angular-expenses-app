import {Injectable} from '@angular/core';
import {ExpenseItem} from "../model/expense-item";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private items: ExpenseItem[] = [
    {position: 1, description: 'Internet Claro', valueSpent: 207.00, category: 'Services'},
    {position: 2, description: 'Gym', valueSpent: 110.00, category: 'Health'},
  ]

  addToExpenses(item: ExpenseItem): void {
    this.items.push(item);
  }

  getItems(): ExpenseItem[] {
    return this.items;
  }

  clearExpenses(): void {
    this.items = [];
  }

}
