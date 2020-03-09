import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute222Page } from './rute222.page';

describe('Rute222Page', () => {
  let component: Rute222Page;
  let fixture: ComponentFixture<Rute222Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute222Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute222Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
