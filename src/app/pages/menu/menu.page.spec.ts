import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { ApisService } from 'src/app/servicios/apis.service';
import { HttpClientModule } from '@angular/common/http';
import { loadZone } from 'zone.js/lib/zone';
import { throwError } from 'rxjs';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;
  let apisServiceSpy: jasmine.SpyObj<ApisService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('ApisService', ['obtnerPerfil']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations:[MenuPage],
      providers:[{provide: ApisService, useValue: spy}]
    });
    apisServiceSpy = TestBed.inject(ApisService)as jasmine.SpyObj<ApisService>;
    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
