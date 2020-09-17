import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { EquiposService } from '../informacion/equipos.service';

@Component({
  selector: 'app-plantel',
  templateUrl: './plantel.component.html',

})
export class PlantelComponent implements OnInit {

  plantel:any[]

  constructor(private activateRoute:ActivatedRoute,
                private _equiposService: EquiposService) { 

    this.activateRoute.params.subscribe(params => {
      console.log(params ['id']);
      this.plantel=this._equiposService.getequipos();
    });
  }

    ngOnInit(): void {
    
  }

}
