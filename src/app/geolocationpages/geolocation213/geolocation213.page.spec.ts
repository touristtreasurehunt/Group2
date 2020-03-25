import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Geolocation213Page } from './geolocation213.page';

describe('Geolocation213Page', () => {
  let component: Geolocation213Page;
  let fixture: ComponentFixture<Geolocation213Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Geolocation213Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Geolocation213Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
