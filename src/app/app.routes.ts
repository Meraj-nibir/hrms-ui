import { Routes } from '@angular/router';

import { Dashboard } from './modules/dashboard/dashboard/dashboard';
import { EmployeeList } from './modules/employees/employee-list/employee-list';
import { EmployeeProfile } from './modules/employees/employee-profile/employee-profile';
import { PayrollList } from './modules/payroll/payroll-list/payroll-list';
import { SalaryList } from './modules/salary/salary-list/salary-list';
import { IncrementList } from './modules/increment/increment-list/increment-list';
import { PromotionList } from './modules/promotion/promotion-list/promotion-list';
import { LeaveList } from './modules/leave/leave-list/leave-list';
import { AttendanceList } from './modules/attendance/attendance-list/attendance-list';
import { NotificationList } from './modules/notifications/notification-list/notification-list';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'employees', component: EmployeeList },
  { path: 'profile', component: EmployeeProfile },
  { path: 'payroll', component: PayrollList },
  { path: 'salary', component: SalaryList },
  { path: 'increment', component: IncrementList },
  { path: 'promotion', component: PromotionList },
  { path: 'leave', component: LeaveList },
  { path: 'attendance', component: AttendanceList },
  { path: 'notifications', component: NotificationList },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
