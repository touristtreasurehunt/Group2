import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute223Page } from './rute223.page';

describe('Rute223Page', () => {
  let component: Rute223Page;
  let fixture: ComponentFixture<Rute223Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute223Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute223Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
