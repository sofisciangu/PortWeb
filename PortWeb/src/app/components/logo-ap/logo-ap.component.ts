import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.servicio';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})

export class LogoAPComponent implements OnInit {
  isLogged = false;
  constructor(private router:Router, private tokenServicio: TokenService){}

  ngOnInit(): void {
    if(this.tokenServicio.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenServicio.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }  }
