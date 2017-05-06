"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpenseReport = (function () {
    function ExpenseReport(total) {
        this._total = total;
    }
    Object.defineProperty(ExpenseReport.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: true,
        configurable: true
    });
    return ExpenseReport;
}());
exports.default = ExpenseReport;
//# sourceMappingURL=ExpenseReport.js.map