import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {ExpenseItem} from "../../model/expense-item";
import {RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {ExpensesFormComponent} from "../expenses-form/expenses-form.component";
import {ExpensesService} from "../../service/expenses.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'expenses-list',
  styleUrl: './expenses-list.component.scss',
  templateUrl: './expenses-list.component.html',
  imports: [MatTableModule, RouterLink, MatCard, MatCardContent, MatToolbar, MatCardHeader, ExpensesFormComponent],
  standalone: true,
})
export class ExpensesListComponent {

  constructor(
    private expensesService: ExpensesService,
  ) {
  }

  displayedColumns: string[] = ['position', 'description', 'valueSpent', 'category']
  items = this.expensesService.getItems();
}
