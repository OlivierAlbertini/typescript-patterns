"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApprovalResponse_1 = require("../enums/ApprovalResponse");
var EndOfChainExpenseHandler_1 = require("./EndOfChainExpenseHandler");
var ExpenseHandler = (function () {
    function ExpenseHandler(expenseApprover) {
        this._approver = expenseApprover;
        this._next = EndOfChainExpenseHandler_1.default.instance;
    }
    ExpenseHandler.prototype.approve = function (expenseReport) {
        var response = this._approver.approveExpense(expenseReport);
        if (response === ApprovalResponse_1.ApprovalResponse.BeyondApprovalLimit) {
            return this._next.approve(expenseReport);
        }
        return response;
    };
    ExpenseHandler.prototype.registerNext = function (next) {
        this._next = next;
    };
    return ExpenseHandler;
}());
exports.default = ExpenseHandler;
//# sourceMappingURL=ExpenseHandler.js.map