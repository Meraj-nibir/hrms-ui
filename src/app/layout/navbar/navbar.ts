import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  showNotifications = false;

  notifications = [

    {
      message:'Your leave request has been approved',
      time:'2 mins ago'
    },

    {
      message:'Promotion approved successfully',
      time:'10 mins ago'
    },

    {
      message:'Salary increment added',
      time:'1 hour ago'
    }

  ];

  toggleNotifications(){

    this.showNotifications = !this.showNotifications;

  }

}
