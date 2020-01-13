import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoverMorePage } from './popover-more.page';

describe('PopoverMorePage', () => {
  let component: PopoverMorePage;
  let fixture: ComponentFixture<PopoverMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverMorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
