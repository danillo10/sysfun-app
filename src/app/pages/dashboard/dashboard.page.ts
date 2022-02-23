import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardComponent implements OnInit {
  @Output() type: 'primary' | 'secondary';
  @Output() color: string;
  @Output() label: string;

  constructor() { }

  ngOnInit() {}

}
