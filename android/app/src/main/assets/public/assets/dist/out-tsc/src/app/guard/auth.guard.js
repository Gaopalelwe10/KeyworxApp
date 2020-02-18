import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
let AuthGuard = class AuthGuard {
    constructor(nav, afAuth) {
        this.nav = nav;
        this.afAuth = afAuth;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => {
            this.afAuth.user.subscribe((user) => {
                if (user) {
                    resolve(true);
                }
                else {
                    this.nav.navigateRoot(['']);
                    resolve(false);
                }
            });
        });
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NavController, AngularFireAuth])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map