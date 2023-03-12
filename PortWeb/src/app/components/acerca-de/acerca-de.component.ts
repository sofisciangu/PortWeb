import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})


export class AcercaDeComponent implements OnInit{
  persona: persona= new persona("","","");
  miPortfolio:any;

  constructor(private datosPortfolio: PortfolioService)  {}
  

  ngOnInit(): void {
    this.datosPortfolio.getPersona().subscribe(data=>{
      this.miPortfolio=data;
  });
  }
}