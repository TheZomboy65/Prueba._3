import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.page.html',
  styleUrls: ['./emergencia.page.scss'],
})
export class EmergenciaPage implements OnInit {

  constructor() { }
  llamarPolicia() {
    window.location.href = "tel:133";
  }
  ngOnInit() {

  }

}
