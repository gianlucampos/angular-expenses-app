import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExpensesListComponent} from "./expenses/component/expenses-list/expenses-list.component";
import {MatToolbar} from "@angular/material/toolbar";
import {ExpensesFormComponent} from "./expenses/component/expenses-form/expenses-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpensesListComponent, MatToolbar, ExpensesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-expenses-app';
}
