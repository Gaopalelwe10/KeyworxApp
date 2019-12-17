import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PropertydetailsPage } from './propertydetails.page';
describe('PropertydetailsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PropertydetailsPage],
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
//# sourceMappingURL=propertydetails.page.spec.js.map