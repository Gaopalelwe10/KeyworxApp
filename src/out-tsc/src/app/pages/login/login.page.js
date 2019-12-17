import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController, AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
let LoginPage = class LoginPage {
    constructor(fb, route, alertCtrl, menuCtrl, loadingCtrl, profileService) {
        this.fb = fb;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profileService = profileService;
        this.isForgotPassword = true;
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
        });
        this.forgotpasswordForm = fb.group({
            email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loading = this.loadingCtrl.create({
                message: 'Signing in, Please wait...',
                // showBackdrop: false,
                spinner: "dots",
            });
            (yield loading).present();
            this.profileService.login(this.loginForm.value.email, this.loginForm.value.password).then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                (yield loading).dismiss();
            }));
        });
    }
    registerPage() {
        this.route.navigateByUrl("register");
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Router,
        AlertController,
        MenuController,
        LoadingController,
        ProfileService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map