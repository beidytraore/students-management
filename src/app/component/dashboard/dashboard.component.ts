import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  sidenavOpened = true
  navLinkList = new Map([
    [1, {title: 'All Student', link: '/dashboard/all-student'}],
    [2, {title: 'Registration', link: '/dashboard/registration'}],
    [3, {title: 'Search Student', link: '/dashboard/search-student'}],
    [4, {title: 'Find Result', link: '/dashboard/find-result'}],
    [5, {title: 'Notice Board', link: '/dashboard/notice-board'}],
    [6, {title: 'Contact', link: '/dashboard/contact'}],
    [7, {title: 'Help', link: '/dashboard/help'}],
    [8, {title: 'Share', link: '/dashboard/share'}],
    [9, {title: 'Settings', link: '/dashboard/settings'}]
  ])

  ngOnInit() {
  }
  toogleSidenav(){
    this.sidenavOpened = !this.sidenavOpened
  }
}
