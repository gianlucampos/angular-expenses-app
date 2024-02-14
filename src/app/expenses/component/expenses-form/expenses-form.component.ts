import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "../../service/expenses.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {ExpenseItem} from "../../model/expense-item";
import {MatCardHeader} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'expenses-form',
  styleUrl: './expenses-form.component.scss',
  templateUrl: './expenses-form.component.html',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CurrencyPipe,
    NgForOf,
    MatCardHeader,
    MatButton,
    NgIf,
  ],
  standalone: true,
})
export class ExpensesFormComponent implements OnInit {

  checkoutForm!: FormGroup;
  NUMERIC_PATTREN = '^-?[0-9]\\d*(\\.\\d{1,2})?$';


  constructor(
    private expensesService: ExpensesService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      position: this.expensesService.getItems().length,
      description: ['', [Validators.required, Validators.maxLength(120)]],
      category: ['', [Validators.required, Validators.maxLength(120)]],
      valueSpent: [0.00, [Validators.required, Validators.min(1), Validators.pattern(this.NUMERIC_PATTREN)]],
    });
  }

  onSubmit(): void {
    let item: ExpenseItem = this.checkoutForm.value as ExpenseItem;
    this.expensesService.addToExpenses(item);
    this.checkoutForm.reset();
    console.log(this.expensesService.getItems());
  }

  ngOnInit(): void {
  }
}
