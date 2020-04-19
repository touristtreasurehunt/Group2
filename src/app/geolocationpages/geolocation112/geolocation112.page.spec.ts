import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Geolocation112Page } from './geolocation112.page';

describe('Geolocation112Page', () => {
  let component: Geolocation112Page;
  let fixture: ComponentFixture<Geolocation112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Geolocation112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Geolocation112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
