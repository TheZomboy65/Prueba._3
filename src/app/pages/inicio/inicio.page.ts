import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage implements OnInit {

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private interval: any;
  isRunning: boolean = false;

  ShiftStatus = "Turno no iniciado";
  startTime: string = '';
  endTime: string= '';

  // Arreglo que almacena los turnos registrados por el guardia
  shiftRecords: { date: string; startTime:string; endTime: string; duration: string }[] = [];

  constructor() {}
  ngOnInit() {
    this.loadShiftRecords();
  }

  // metodo para iniciar el turno y el contador
  startShift() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.ShiftStatus = "En turno";
      this.startTime = this.getCurrentTime();
      this.interval = setInterval(() => {
        this.incrementTimer();
      }, 1000);
    }
  }

  // metodo para detener el turno y el contador
  endShift() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = false;
      
      // guarda la hora de fin y la duracion del turno en el registro
      this.endTime = this.getCurrentTime();
      const currentDate = new Date().toLocaleDateString();
      const shiftDuration = this.formattedTime;
      this.shiftRecords.push({ 
        date: currentDate,
        startTime: this.startTime,
        endTime: this.endTime,
        duration: shiftDuration 
      });

      //guarda el registro en el local storage
      this.saveShiftRecords();

      // Reinicia el temporizador después de guardar el turno
      this.resetTimer();

      this.ShiftStatus ="Turno Finalizado";
      setTimeout(() => {
        this.ShiftStatus = "Turno No iniciado";
      }, 2000);
    }
  }

  // metodo del temporizador
  private incrementTimer() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
  }

  // metodo para resetear el temporizador
  private resetTimer() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  // dar formato al temporizador
  get formattedTime(): string {
    return `${this.formatWithTwoDigits(this.hours)}:${this.formatWithTwoDigits(this.minutes)}:${this.formatWithTwoDigits(this.seconds)}`;
  }

  // metodo para agregar ceros si el número tiene un solo dígito
  private formatWithTwoDigits(num: number): string {
    return num.toString().padStart(2, '0');
  }

  public getCurrentTime(): string {
    const now = new Date();
    return `${this.formatWithTwoDigits(now.getHours())}:${this.formatWithTwoDigits(now.getMinutes())}:${this.formatWithTwoDigits(now.getSeconds())}`;
  }

  //metodo para guardar los registros en el local storage
  private saveShiftRecords(){
    localStorage.setItem('shiftRecords', JSON.stringify(this.shiftRecords));
  }
 
  //metodo para cargar los registros desde el local storage
  public loadShiftRecords(){
    const storedRecords = localStorage.getItem('shiftRecords');
    if (storedRecords){
      this.shiftRecords = JSON.parse(storedRecords);
    }
  }
  
}
