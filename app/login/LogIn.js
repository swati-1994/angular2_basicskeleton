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
var loginComponent = (function () {
    function loginComponent(router, credential_service) {
        this.router = router;
        this.credential_service = credential_service;
        this.swati = [];
    }
    loginComponent.prototype.getRoot = function () {
        return Promise.resolve(this.swati);
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: './app/login/LogIn.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.Router, eChangeSevice_1.credentialService])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
this.
    login();
{
    this.router.navigate(['agreement']);
}
//# sourceMappingURL=LogIn.js.map