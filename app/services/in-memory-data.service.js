"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var credentials = [
            { 'email': 'swati@headerlabs.com', 'password': 'swati' },
            { 'email': 'shivam@headerlabs.com', 'password': 'shivam' },
            { 'email': 'gultu@headerlabs.com', 'password': 'gultu' },
            { 'email': 'gurinder@headerlabs.com', 'password': 'gurdinder' },
        ];
        return { credentials: credentials };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map