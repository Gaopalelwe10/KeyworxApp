import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MustMatch } from 'src/app/module/must-match';
import { ProfileService } from 'src/app/services/profile.service';
let RegisterPage = class RegisterPage {
    constructor(fb, route, loadingCtrl, profileService) {
        this.fb = fb;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.profileService = profileService;
        this.registerdetails = {
            name: '',
            email: '',
            uid: '',
        };
        this.register = fb.group({
            name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
            email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
            cpassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'cpassword')
        });
    }
    ngOnInit() {
    }
    PersonRegister() {
        this.registerdetails.name = this.register.value.name;
        this.registerdetails.email = this.register.value.email;
        this.profileService.signup(this.registerdetails, this.register.value.password);
    }
    login() {
        this.route.navigateByUrl('login');
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Router,
        LoadingController,
        ProfileService])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map