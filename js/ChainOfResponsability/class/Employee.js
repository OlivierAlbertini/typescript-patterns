"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApprovalResponse_1 = require("../enums/ApprovalResponse");
var Employee = (function () {
    function Employee(name, approvalLimit) {
        this._name = name;
        this._approvalLimit = approvalLimit;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.approveExpense = function (expenseReport) {
        return expenseReport.total > this._approvalLimit
            ? ApprovalResponse_1.ApprovalResponse.BeyondApprovalLimit
            : ApprovalResponse_1.ApprovalResponse.Approved;
    };
    return Employee;
}());
exports.default = Employee;
//# sourceMappingURL=Employee.js.map