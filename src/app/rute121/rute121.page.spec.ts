import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rute121Page } from './rute121.page';

describe('Rute121Page', () => {
  let component: Rute121Page;
  let fixture: ComponentFixture<Rute121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rute121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rute121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
