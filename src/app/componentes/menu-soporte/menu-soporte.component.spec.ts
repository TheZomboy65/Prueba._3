import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';

import { MenuSoporteComponent } from './menu-soporte.component';

describe('MenuSoporteComponent', () => {
  let component: MenuSoporteComponent;
  let fixture: ComponentFixture<MenuSoporteComponent>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;

  beforeEach(waitForAsync(() => {
    // se crea un espia para el toastController
    toastControllerSpy = jasmine.createSpyObj(' ToastController', ['create']);

    TestBed.configureTestingModule({
      declarations: [ MenuSoporteComponent ],
      providers: [{provide: ToastController, useValue: toastControllerSpy }], // mover el espia en lugar de la clase real
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' shloud have mostrarFormulario as false', () => {
    expect(component.mostrarFormulario).toBeFalse();
  });
  // verifica cambio de estado mostrarFormulario con el toggleFormulario
  it(' should toggle mostrarFormulario value when toggleFormulario' ,() =>{
    component.toggleFormulario();
    expect(component.mostrarFormulario).toBeTrue();

    component.toggleFormulario();
    expect(component.mostrarFormulario).toBeFalse();
  });
  // verifica el enviarFormulario cambia a mostrarFormulario
  it('should set mostrarFormulario to false when enviarFormulario', () => {
    component.mostrarFormulario = true;
    component.enviarFormulario();
    expect(component.mostrarFormulario).toBeFalse();
  });

  it('should open whasapp', ()=>{
    const spy = spyOn(window,'open'); // verifica window.opense llame correctamente
    component.abrirChatWhatsApp();
    const mensaje = encodeURIComponent(' Hola! me comunico co el equipo de soporte para una pronta solucion a un problema tecnico con mi App');
    const enlaceEsperado = 'https://wa.me/${component.numeroWhatsApp}?text=${mensaje}';
    expect(spy).toHaveBeenCalledWith(enlaceEsperado,'blank');
  });
  //Cambio de estado de IsModalOpen
  it (' should set isModalOpen to true ', () => {
    component.setOpen(true);
    expect(component.isModalOpen).toBeTrue();
    component.setOpen(false);
    expect(component.isModalOpen).toBeFalse();

  });

});
