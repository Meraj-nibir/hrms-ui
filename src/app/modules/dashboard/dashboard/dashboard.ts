import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  chartData: any;

  constructor(){

    this.chartData = {
      labels: ['IT', 'HR', 'Accounts', 'Management'],
      datasets: [
        {
          label: 'Employees',
          data: [40, 20, 25, 35]
        }
      ]
    }

  }

}
