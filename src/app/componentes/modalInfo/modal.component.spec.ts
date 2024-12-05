import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { Camera } from '@capacitor/camera';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>
  let cameraSpy: jasmine.SpyObj<[]>; // solucionar el problema con camera

  beforeEach(waitForAsync(() => {

    toastControllerSpy = jasmine.createSpyObj('ToastController', ['create']);
    cameraSpy = jasmine.createSpyObj('Camera', ['getPhoto']);

    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers:[
        {provide: ToastController, useValue: toastControllerSpy},
        {provide: Camera, useValue: cameraSpy}],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it (' should set isModalOpen to true and false ', () => {
    component.setOpen(true);
    expect(component.isModalOpen).toBeTrue();
    component.setOpen(false);
    expect(component.isModalOpen).toBeFalse();

  });
  // esta en wasap problema con el promise


});
