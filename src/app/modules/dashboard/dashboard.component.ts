import { Component, OnInit, NgZone } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';  
import { MatTableDataSource, MatPaginator } from '@angular/material';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuItems: any[];

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {

  }

}
