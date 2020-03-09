import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute112Page } from './rute112.page';

describe('Rute112Page', () => {
  let component: Rute112Page;
  let fixture: ComponentFixture<Rute112Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute112Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute112Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
