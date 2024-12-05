import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-menu-preguntas-f',
  templateUrl: './menu-preguntas-f.component.html',
  styleUrls: ['./menu-preguntas-f.component.scss'],
})
export class MenuPreguntasFComponent    {

  constructor() {}
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
 
}