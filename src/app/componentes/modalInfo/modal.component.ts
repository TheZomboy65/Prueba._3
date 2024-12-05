import { Component, OnDestroy, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy   {
  isModalOpen = false;
  fechaLocal: string = ''; 
  horaLocal: string = '';
  private intervalo: any;
  constructor(private toastController: ToastController) {}
 
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Informe enviado correctamente',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  photo: string | undefined; 

 async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, 
        source: CameraSource.Camera, 
      });
  
      this.photo = image.dataUrl; 
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  ngOnInit(): void {

    this.actualizarFechaHora();
    this.intervalo = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000); 

  }

  ngOnDestroy(): void {

    if (this.intervalo) {
      clearInterval(this.intervalo); 
    }
  }

  actualizarFechaHora() {
    const ahora = new Date();
    const opcionesFecha: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  
    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES', opcionesHora); 
  
    this.fechaLocal = `${fecha}`;
    this.horaLocal = ` ${hora}`;
  }
  }




