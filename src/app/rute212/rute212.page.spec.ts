import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute212Page } from './rute212.page';

describe('Rute212Page', () => {
  let component: Rute212Page;
  let fixture: ComponentFixture<Rute212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute212Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
