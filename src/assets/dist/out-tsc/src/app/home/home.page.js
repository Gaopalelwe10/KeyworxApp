import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';
let HomePage = class HomePage {
    constructor(router, propertyService, profileService) {
        this.router = router;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.slidesOptions = {
            slidesPerView: 2.5,
        };
        this.slidesOpt = {
            slidesPerView: 0.3,
        };
        this.propertyService.propertyList().subscribe(data => {
            this.propertyList = data.map(e => {
                return Object.assign({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(this.propertyList);
        });
    }
    fliter() {
        this.router.navigateByUrl("filter");
    }
    logout() {
        this.profileService.logout();
    }
    detail(items) {
        this.router.navigate(['/details'], {
            queryParams: {
                mainImage: items.mainImage,
                uid: items.uid, propertyid: items.propertyid,
                location: items.location, price: items.price,
                description: items.description,
                bedrooms: items.bedrooms,
                bathrooms: items.bathrooms,
                garage: items.garage
            }
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        PropertyService,
        ProfileService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map