import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
describe('ProfileService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ProfileService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=profile.service.spec.js.map