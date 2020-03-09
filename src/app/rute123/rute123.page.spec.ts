import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute123Page } from './rute123.page';

describe('Rute123Page', () => {
  let component: Rute123Page;
  let fixture: ComponentFixture<Rute123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
