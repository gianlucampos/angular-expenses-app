import {Component} from '@angular/core';
import {ExpensesService} from "../../service/expenses.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {ExpenseItem} from "../../model/expense-item";

@Component({
  selector: 'expenses-form',
  styleUrl: './expenses-form.component.scss',
  templateUrl: './expenses-form.component.html',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CurrencyPipe,
    NgForOf
  ],
  standalone: true,
})
export class ExpensesFormComponent {

  items = this.expensesService.getItems();

  checkoutForm = this.formBuilder.group({
    position: this.items.length,
    description: '',
    category: '',
    valueSpent: 0.00,
  });

  constructor(
    private expensesService: ExpensesService,
    private formBuilder: FormBuilder,
  ) {
  }

  onSubmit(): void {
    let item: ExpenseItem = this.checkoutForm.value as ExpenseItem;
    this.expensesService.addToExpenses(item);
    this.items = this.expensesService.getItems();
    this.checkoutForm.reset();
  }
}
