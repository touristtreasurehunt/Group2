import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute221Page } from './rute221.page';

describe('Rute221Page', () => {
  let component: Rute221Page;
  let fixture: ComponentFixture<Rute221Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute221Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute221Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
