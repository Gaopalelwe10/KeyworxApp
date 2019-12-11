import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
let ImagesPage = class ImagesPage {
    constructor(route) {
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
};
ImagesPage = tslib_1.__decorate([
    Component({
        selector: 'app-images',
        templateUrl: './images.page.html',
        styleUrls: ['./images.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], ImagesPage);
export { ImagesPage };
//# sourceMappingURL=images.page.js.map