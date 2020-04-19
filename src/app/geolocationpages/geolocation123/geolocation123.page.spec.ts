import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Geolocation123Page } from './geolocation123.page';

describe('Geolocation123Page', () => {
  let component: Geolocation123Page;
  let fixture: ComponentFixture<Geolocation123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Geolocation123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Geolocation123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
