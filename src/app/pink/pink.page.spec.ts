import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinkPage } from './pink.page';

describe('PinkPage', () => {
  let component: PinkPage;
  let fixture: ComponentFixture<PinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
