"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var credentials = [
            { 'e-mail': 'swati@headerlabs.com', 'password': 'swati' },
            { 'e-mail': 'shivam@headerlabs.com', 'password': 'shivam' }
        ];
        return { credentials: credentials };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map