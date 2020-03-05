import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute122Page } from './rute122.page';

describe('Rute122Page', () => {
  let component: Rute122Page;
  let fixture: ComponentFixture<Rute122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute122Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute122Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
