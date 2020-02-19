import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { ModalController } from '@ionic/angular';
import { PropertyService } from 'src/app/services/property.service';
let DetailsPage = class DetailsPage {
    constructor(router, propertyService, profileService, modalController, route) {
        this.router = router;
        this.propertyService = propertyService;
        this.profileService = profileService;
        this.modalController = modalController;
        this.route = route;
        this.items = {
            mainImage: "",
            location: "",
            description: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            garage: "",
        };
        this.propertyService.propertyList().subscribe(data => {
            this.propertyList = data.map(e => {
                return Object.assign({ key: e.payload.doc.id }, e.payload.doc.data());
            });
            console.log(this.propertyList);
        });
        this.route.queryParams
            .subscribe(params => {
            this.items.mainImage = params.mainImage;
            this.items.location = params.location;
            this.items.price = params.price;
            this.items.description = params.description;
            this.items.bedrooms = params.bedrooms;
            this.items.bathrooms = params.bathrooms;
            this.items.garage = params.garage;
            console.log(this.items.mainImage, this.items.location, this.items.price, this.items.description, this.items.bedrooms, this.items.bathrooms, this.items.garage);
        });
    }
    ngOnInit() {
    }
    image(items) {
        this.router.navigate(['/images'], {
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
DetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-details',
        templateUrl: './details.page.html',
        styleUrls: ['./details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        PropertyService,
        ProfileService,
        ModalController,
        ActivatedRoute])
], DetailsPage);
export { DetailsPage };
//# sourceMappingURL=details.page.js.map