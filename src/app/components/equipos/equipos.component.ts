import { Component, OnInit } from '@angular/core';
import {EquiposService, equipo} from '../informacion/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  
})
export class EquiposComponent implements OnInit {

  equipos:equipo[]=[]

  constructor( private _equiposService: EquiposService) { 
    console.log("constructor");
  }

  ngOnInit(): void {

    this.equipos= this._equiposService.getequipos();
    console.log(this.equipos);

    console.log("ngOInit");
  }

}
