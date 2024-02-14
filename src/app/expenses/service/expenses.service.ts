import {Injectable} from '@angular/core';
import {ExpenseItem} from "../model/expense-item";
import {StorageService} from "../../shared/service/storage.service";
import {STORAGE_KEYS} from "../../config/storage-keys.config";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private storageService: StorageService) {
  }

  addToExpenses(item: ExpenseItem): void {
    item.position = this.getItems().length + 1;
    item.valueSpent = +item.valueSpent;
    this.storageService.saveExpenses(item);
  }

  getItems(): ExpenseItem[] {
    return this.storageService.getExpenses();
  }

  clearExpenses(): void {
    this.storageService.clearData(STORAGE_KEYS.expenses);
  }

}
