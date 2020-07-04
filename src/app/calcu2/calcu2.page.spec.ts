import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Calcu2Page } from './calcu2.page';

describe('Calcu2Page', () => {
  let component: Calcu2Page;
  let fixture: ComponentFixture<Calcu2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calcu2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Calcu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
