import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { InicioPage } from './inicio.page';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Funcion que el temporizador inicie correctamente
  it('should start the shift and the timer when startshift', fakeAsync(() => {
    component.startShift();
    expect(component.isRunning).toBeTrue();
    expect(component.ShiftStatus).toBe("En turno");

    tick(1000);
    expect(component.hours).toBe(0);
    expect(component.minutes).toBe(0);
    expect(component.seconds).toBe(1);
  }));
  //Funcion que el temporizador se detenga y registre el turno correcto
  it('should end the shift' , fakeAsync (() => {
    component.startShift();
    tick(5000);
    component.endShift();

    expect(component.isRunning).toBeFalse();
    expect(component.ShiftStatus).toBe("Turno Finalizado");
    expect(component.shiftRecords.length).toBe(1);
    expect(component.shiftRecords[0].duration).toBe("00:00:05");

    expect(component.hours).toBe(0);
    expect(component.minutes).toBe(0);
    expect(component.seconds).toBe(0);
  }));

  it('should save the shift records in localStoraje' , fakeAsync(() => {
    spyOn(localStorage, 'setItem');
    component.startShift();
    tick(1000);
    component.endShift();
    expect(localStorage.setItem).toHaveBeenCalledWith('shiftRecords', jasmine.any(String));
  }));

  it('should load shift records from localStoraje', () => {
    const mocKShiftRecords = [
      { date: '2024-11-28', startTime: '08:00:00' , endTime: '08:05:00',duration:'00:05:00' }
    ];
    spyOn(localStorage,'getItem').and.returnValue(JSON.stringify(mocKShiftRecords));

    component.loadShiftRecords();

    expect(component.shiftRecords).toEqual(mocKShiftRecords);
  });

  it('should return formatted time as a string ', () => {
    component.hours = 5;
    component.minutes = 3;
    component.seconds = 9;
    expect(component.formattedTime).toBe('05:03:09');
  });

  it('should return the current time in the correcto loadShiftRecords', () => {
    const CurrentTime = component.getCurrentTime();
    const now = new Date();
    const expectedTime = '${component.formatWithTwoDigits(now.getHours())}:${component.formatWithTwoDigits(now.getMinutes())}:${component.formatWithTwoDigits(now.getSeconds())}';
    expect(CurrentTime).toBe(expectedTime);
  });

});
