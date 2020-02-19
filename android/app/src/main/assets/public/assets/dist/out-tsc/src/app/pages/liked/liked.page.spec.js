import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LikedPage } from './liked.page';
describe('LikedPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LikedPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(LikedPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=liked.page.spec.js.map