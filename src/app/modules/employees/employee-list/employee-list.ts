import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ToastModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeList {

  showDialog = false;

  isEditMode = false;

  selectedEmployee:any = null;

  searchText = '';

  employees:any[] = [

    {
      image:'https://i.pravatar.cc/150?img=1',
      name:'John Doe',
      department:'IT',
      position:'Frontend Developer',
      salary:1200,
      status:'Active'
    },

    {
      image:'https://i.pravatar.cc/150?img=2',
      name:'Sarah',
      department:'HR',
      position:'HR Manager',
      salary:1500,
      status:'Active'
    }

  ];

  filteredEmployees:any[] = [];

  newEmployee:any = {

    image:'',
    name:'',
    department:'',
    position:'',
    salary:0,
    status:'Active'

  };

  constructor(
    private messageService: MessageService
  ){

    this.filteredEmployees = this.employees;

  }

  addEmployee(){

    if(

      !this.newEmployee.name ||
      !this.newEmployee.department ||
      !this.newEmployee.position ||
      !this.newEmployee.salary

    ){

      this.messageService.add({

        severity:'error',
        summary:'Validation Error',
        detail:'Please fill all fields'

      });

      return;

    }

    if(this.isEditMode){

      Object.assign(
        this.selectedEmployee,
        this.newEmployee
      );

      this.messageService.add({

        severity:'success',
        summary:'Updated',
        detail:'Employee updated successfully'

      });

    }else{

      this.employees.push({

        ...this.newEmployee,

        image:'https://i.pravatar.cc/150'

      });

      this.messageService.add({

        severity:'success',
        summary:'Success',
        detail:'Employee added successfully'

      });

    }

    this.filteredEmployees = this.employees;

    this.showDialog = false;

    this.resetForm();

  }

  editEmployee(employee:any){

    this.isEditMode = true;

    this.showDialog = true;

    this.selectedEmployee = employee;

    this.newEmployee = {

      ...employee

    };

  }

  deleteEmployee(employee:any){

    this.employees =
      this.employees.filter(item => item !== employee);

    this.filteredEmployees = this.employees;

  }

  filterEmployees(){

    this.filteredEmployees =
      this.employees.filter((item:any)=>

        item.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase())

      );

  }

  resetForm(){

    this.newEmployee = {

      image:'',
      name:'',
      department:'',
      position:'',
      salary:0,
      status:'Active'

    };

    this.isEditMode = false;

    this.selectedEmployee = null;

  }

}
