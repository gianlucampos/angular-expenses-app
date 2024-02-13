import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpensesListComponent} from "./component/expenses-list/expenses-list.component";
import {ExpensesFormComponent} from "./component/expenses-form/expenses-form.component";

const routes: Routes = [
  {path: '', component: ExpensesListComponent},
  {path: 'save', component: ExpensesFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
