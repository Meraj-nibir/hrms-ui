import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-increment-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  templateUrl: './increment-list.html',
  styleUrl: './increment-list.scss'
})
export class IncrementList {

  showDialog = false;
  searchText = '';

  filteredIncrements:any[] = [];

  increments = [

    {
      employee:'John Doe',
      currentSalary:1200,
      increment:10,
      newSalary:1320,
      date:'May 2026'
    },

    {
      employee:'Sarah',
      currentSalary:1500,
      increment:15,
      newSalary:1725,
      date:'May 2026'
    }

  ];

  newIncrement:any = {

    employee:'',
    currentSalary:0,
    increment:0

  };

  constructor(){

    this.filteredIncrements = this.increments;

  }

  addIncrement(){

    const salary =
      this.newIncrement.currentSalary +
      (
        this.newIncrement.currentSalary *
        this.newIncrement.increment / 100
      );

    this.increments.push({

      employee:this.newIncrement.employee,

      currentSalary:this.newIncrement.currentSalary,

      increment:this.newIncrement.increment,

      newSalary:salary,

      date:'May 2026'

    });

    this.showDialog = false;
    this.resetForm();
    this.filteredIncrements = this.increments;
  }

  filterEmployees(){

    this.filteredIncrements = this.increments.filter((item:any) =>

      item.employee
        .toLowerCase()
        .includes(this.searchText.toLowerCase())

    );

  }
  resetForm(){

    this.newIncrement = {

      employee:'',
      currentSalary:0,
      increment:0

    };

  }

}
