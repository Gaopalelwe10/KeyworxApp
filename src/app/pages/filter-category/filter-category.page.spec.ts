import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterCategoryPage } from './filter-category.page';

describe('FilterCategoryPage', () => {
  let component: FilterCategoryPage;
  let fixture: ComponentFixture<FilterCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
