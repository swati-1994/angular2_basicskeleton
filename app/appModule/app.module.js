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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('../appComponents/app.component');
var LogIn_1 = require('../login/LogIn');
var header_1 = require("../appComponents/appHeader/header");
var footer_1 = require("../appComponents/appFooter/footer");
var router_1 = require('@angular/router');
var signup_1 = require("../signup/signup");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'signup',
                        component: signup_1.signupComponent
                    },
                    {
                        path: 'login',
                        component: LogIn_1.loginComponent
                    },
                    {
                        path: '',
                        redirectTo: '/login',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, LogIn_1.loginComponent, header_1.headerComponent, footer_1.footerComponent, signup_1.signupComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map