import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/servicios/apis.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
perfil:any

  constructor( private apisService :ApisService) {}
  
  ngOnInit(): void {
    this.apisService.obtenerPerfil().subscribe(
      {
        next:(respuestaApi:any)=>{
          console.log('Datos Recibidos:',respuestaApi);
          this.perfil = respuestaApi.results[0];
          localStorage.setItem('perfil',JSON.stringify(this.perfil))
        },
        error:(err)=>{
          console.error('error al obtener el perfil',err);
        },
      }
    );
  }
}
