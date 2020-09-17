import { Injectable } from '@angular/core';

@Injectable()
export class EquiposService {


    private equipos:equipo[]=[
        {
          equipo: "Boca",
          biografia: "El Club Atlético Boca Juniors es una entidad deportiva argentina con sede en el barrio de La Boca, Buenos Aires. Fue fundado en dicho barrio el 3 de abril de 1905 por seis vecinos adolescentes hijos de italianos",
          img: "assets/img/boca.png",
          aparicion: "1905-03-01",
          Pais:"Argentina"
        },
        {
          equipo: "River",
          biografia: "El Club Atlético River Plate, más conocido simplemente como River Plate, es una entidad polideportiva con sede en Buenos Aires, Argentina.​ El club fue fundado el 25 de mayo de 1901 en el barrio de La Boca, tras la fusión de los clubes Santa Rosa y La Rosales.",
          img: "assets/img/river.png",
          aparicion: "1901-25-04",
          Pais:"Argentina"
        },
          {
          equipo: "Racing",
          biografia: "Racing Club, conocido como Racing Club de Avellaneda o simplemente Racing, es una entidad deportiva oriunda de Argentina, fundada el 25 de marzo de 1903, ubicada en la Ciudad de Avellaneda, Provincia de Buenos Aires.​ ",
          img: "assets/img/racing.png",
          aparicion: "1903-11-01",
          Pais:"Argentina"
        },
    ];


    constructor (){
        console.log(" servicio listo para usarse")
    }
    getequipos(): equipo[]{
        return this.equipos;
    }

    getequipo( idx:string){
        return this.equipos[idx];
    }

}

export interface equipo{

    equipo:String;
    biografia:String;
    img:String;
    aparicion:String;
    Pais:String;

}