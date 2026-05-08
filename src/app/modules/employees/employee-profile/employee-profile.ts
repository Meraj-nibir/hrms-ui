import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [TableModule],
  templateUrl: './employee-profile.html',
  styleUrl: './employee-profile.scss'
})
export class EmployeeProfile {

  salaryHistory = [

    {
      date:'Jan 2025',
      oldSalary:'$1000',
      newSalary:'$1200',
      increment:'20%'
    },

    {
      date:'Jan 2026',
      oldSalary:'$1200',
      newSalary:'$1400',
      increment:'15%'
    }

  ];

  promotions = [

    {
      oldPosition:'Junior Developer',
      newPosition:'Frontend Developer',
      date:'March 2025'
    },

    {
      oldPosition:'Frontend Developer',
      newPosition:'Senior Developer',
      date:'April 2026'
    }

  ];

}
