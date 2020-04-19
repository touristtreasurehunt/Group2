import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute211Page } from './rute211.page';

describe('Rute211Page', () => {
  let component: Rute211Page;
  let fixture: ComponentFixture<Rute211Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute211Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute211Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
