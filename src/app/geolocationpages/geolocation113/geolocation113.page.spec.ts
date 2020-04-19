import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Geolocation113Page } from './geolocation113.page';

describe('Geolocation113Page', () => {
  let component: Geolocation113Page;
  let fixture: ComponentFixture<Geolocation113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Geolocation113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Geolocation113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
