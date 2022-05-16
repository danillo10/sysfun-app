import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import exportedComponents from './dashboard-buttons.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardComponent implements OnInit {
  @Output() type: 'primary' | 'secondary';
  @Output() color: string;
  @Output() label: string;

  buttons: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.buttons = exportedComponents.buttons;
  }

  goToView(page){
    this.router.navigate([page]);
  }

}
