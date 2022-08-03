import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { throws } from 'assert';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() rota: string;
  rotaAtual: string;
   
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
     this._router.events.subscribe((event: Event) =>{
      if(event instanceof NavigationEnd){
        this.rotaAtual = event.url;
      }
    })
  }

  navigate(){
    this._router.navigate([this.rota]);
  }
}
