import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute111Page } from './rute111.page';

describe('Rute111Page', () => {
  let component: Rute111Page;
  let fixture: ComponentFixture<Rute111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
