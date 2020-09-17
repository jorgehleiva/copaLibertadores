import { Component } from '@angular/core';
import {RouterModule, Routes} from  '@angular/router';
import { from } from 'rxjs';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import {PlantelComponent} from './components/plantel/plantel.component';
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'equipos', component: EquiposComponent},
    { path: 'plantel/:id', component: PlantelComponent},
   
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
    
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);