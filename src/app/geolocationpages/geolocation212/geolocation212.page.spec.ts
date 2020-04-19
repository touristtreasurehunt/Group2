import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Geolocation212Page } from './geolocation212.page';

describe('Geolocation212Page', () => {
  let component: Geolocation212Page;
  let fixture: ComponentFixture<Geolocation212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Geolocation212Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Geolocation212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
