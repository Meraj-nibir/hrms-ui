import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [TableModule, ButtonModule, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeList {

  employees = [

    {
      image:'https://i.pravatar.cc/40?img=1',
      name:'John Doe',
      department:'IT',
      position:'Frontend Developer',
      salary:'$1200',
      status:'Active'
    },

    {
      image:'https://i.pravatar.cc/40?img=2',
      name:'Sarah',
      department:'HR',
      position:'HR Manager',
      salary:'$1500',
      status:'Active'
    },

    {
      image:'https://i.pravatar.cc/40?img=3',
      name:'Michael',
      department:'Accounts',
      position:'Accountant',
      salary:'$1000',
      status:'Active'
    }

  ];

}
