import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertydetailsPage } from './propertydetails.page';

describe('PropertydetailsPage', () => {
  let component: PropertydetailsPage;
  let fixture: ComponentFixture<PropertydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
