import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss'
})
export class EmployeeForm {

  @Output() save = new EventEmitter();

  employee:any = {

    name:'',
    department:'',
    position:'',
    salary:0,
    status:'Active'

  };

  saveEmployee(){

    this.save.emit({

      ...this.employee,

      image:'https://i.pravatar.cc/150'

    });

    this.resetForm();

  }

  resetForm(){

    this.employee = {

      name:'',
      department:'',
      position:'',
      salary:0,
      status:'Active'

    };

  }

}
