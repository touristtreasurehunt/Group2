import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute113Page } from './rute113.page';

describe('Rute113Page', () => {
  let component: Rute113Page;
  let fixture: ComponentFixture<Rute113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
