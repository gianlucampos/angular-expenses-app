import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {ExpensesFormComponent} from "../expenses-form/expenses-form.component";
import {ExpensesService} from "../../service/expenses.service";
import {CurrencyPipe} from "@angular/common";
import {ExpenseItem} from "../../model/expense-item";

@Component({
  selector: 'expenses-list',
  styleUrl: './expenses-list.component.scss',
  templateUrl: './expenses-list.component.html',
  imports: [
    ExpensesFormComponent,
    MatTableModule,
    MatCard,
    MatCardContent,
    MatToolbar,
    MatCardHeader,
    CurrencyPipe],
  standalone: true,
})
export class ExpensesListComponent {

  displayedColumns: string[] = ['position', 'description', 'valueSpent', 'category'];
  items: ExpenseItem[] = [];

  constructor(private expensesService: ExpensesService) {
    this.items = this.expensesService.getItems();
  }

}
