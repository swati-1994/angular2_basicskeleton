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
    // private CredentialService: credentialService,
    function loginComponent(router, CredentialService) {
        this.router = router;
        this.CredentialService = CredentialService;
        this.user = {};
    }
    loginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CredentialService
            .getcredential()
            .then(function (credentials) { return _this.user_list = credentials; });
    };
    loginComponent.prototype.login = function () {
        console.log("User : ", JSON.stringify(this.user));
        // console.log("hiiii" + JSON.stringify(_.findWhere(this.user_list, {email: "swati@headerlabs.com"})));
        // if (JSON.stringify(_.findWhere(this.user_list, {email: "swati@headerlab"}))) {
        //     this.router.navigate(['agreement']);
        //
        //     console.log("logged in");
        // }
        // else {
        //
        //     console.log("could not log in");
        // }
        //        _.findWhere(this.user_list, {email: "swati@headerlabs.com"});
        // this.router.navigate(['agreement']);
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
//# sourceMappingURL=LogIn.js.map