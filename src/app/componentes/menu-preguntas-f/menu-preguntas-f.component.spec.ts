import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPreguntasFComponent } from './menu-preguntas-f.component';

describe('MenuPreguntasFComponent', () => {
  let component: MenuPreguntasFComponent;
  let fixture: ComponentFixture<MenuPreguntasFComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPreguntasFComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPreguntasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should set isModalOpen to false', () => {
    expect(component.isModalOpen).toBeFalse();
  });

  it (' should set isModalOpen to true and false ', () => {
    component.setOpen(true);
    expect(component.isModalOpen).toBeTrue();
    component.setOpen(false);
    expect(component.isModalOpen).toBeFalse();

  });

 
  
});
