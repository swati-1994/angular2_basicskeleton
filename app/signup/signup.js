"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var eChangeSevice_1 = require('../services/eChangeSevice');
var signupComponent = (function () {
    function signupComponent(router, CredentialService) {
        this.router = router;
        this.CredentialService = CredentialService;
        this.signup_user = {
            'email': '',
            'password': '',
            'first_name': '',
            'last_name': ''
        };
    }
    signupComponent.prototype.signUp = function () {
        console.log("user details:" + JSON.stringify(this.signup_user));
        var email = this.signup_user.email;
        var password = this.signup_user.password;
        var first_name = this.signup_user.first_name;
        var last_name = this.signup_user.last_name;
        if (!this.signup_user) {
            return;
        }
        this.CredentialService.create(this.signup_user)
            .then(function () { });
        this.router.navigate(['agreement']);
    };
    signupComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            templateUrl: './app/signup/signup.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.Router, eChangeSevice_1.credentialService])
    ], signupComponent);
    return signupComponent;
}());
exports.signupComponent = signupComponent;
//# sourceMappingURL=signup.js.map