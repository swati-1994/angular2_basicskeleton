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
/**
 * Created by swati on 25/11/16.
 */
var core_1 = require('@angular/core');
var qr_codeComponent = (function () {
    function qr_codeComponent() {
    }
    qr_codeComponent = __decorate([
        core_1.Component({
            selector: 'my-qr',
            templateUrl: './app/qr_code/qr_code.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], qr_codeComponent);
    return qr_codeComponent;
}());
exports.qr_codeComponent = qr_codeComponent;
//# sourceMappingURL=qr_code.js.map