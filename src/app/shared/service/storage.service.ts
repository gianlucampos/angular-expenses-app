import {Injectable} from '@angular/core';
import {STORAGE_KEYS} from "../../config/storage-keys.config";
import {ExpenseItem} from "../../expenses/model/expense-item";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    localStorage.clear();
    this.saveExpenses(
      {position: 1, description: 'Internet Claro', category: 'Services', valueSpent: 207.00},
    );
    this.saveExpenses(
      {position: 2, description: 'Gym', category: 'Health', valueSpent: 110.00},
    );
  }

  getExpenses(): ExpenseItem[] {
    let expenses = localStorage.getItem(STORAGE_KEYS.expenses);
    if (expenses == null) {
      return [];
    }
    return JSON.parse(expenses);
  }

  saveExpenses(expenseItem: ExpenseItem) {
    if (this.getExpenses().length === 0) {
      localStorage.setItem(STORAGE_KEYS.expenses, JSON.stringify([expenseItem]));
      return;
    }
    let items = this.getExpenses();
    items.push(expenseItem);
    localStorage.setItem(STORAGE_KEYS.expenses, JSON.stringify(items));
  }

  clearData(key: string) {
    localStorage.removeItem(key);
  }

}
