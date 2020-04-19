import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute213Page } from './rute213.page';

describe('Rute213Page', () => {
  let component: Rute213Page;
  let fixture: ComponentFixture<Rute213Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute213Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute213Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
