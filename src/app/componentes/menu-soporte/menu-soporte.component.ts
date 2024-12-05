import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonModal, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu-soporte',
  templateUrl: './menu-soporte.component.html',
  styleUrls: ['./menu-soporte.component.scss'],
})
export class MenuSoporteComponent   {

  numeroWhatsApp: string = '+56966461943';
  constructor() {}
  mostrarFormulario: boolean = false;
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
  enviarFormulario() {
    
      this.mostrarFormulario = false;
  }

  abrirChatWhatsApp() {
    const mensaje = encodeURIComponent('hola! me comunico con el equipo de soporte para una pronta solucion a un problema tecnico con mi App ');
    const enlace = `https://wa.me/${this.numeroWhatsApp}?text=${mensaje}`;
    window.open(enlace, '_blank');
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}


