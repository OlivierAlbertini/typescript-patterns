"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApprovalResponse_1 = require("../enums/ApprovalResponse");
var EndOfChainExpenseHandler = (function () {
    function EndOfChainExpenseHandler() {
    }
    Object.defineProperty(EndOfChainExpenseHandler, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    EndOfChainExpenseHandler.prototype.approve = function (expenseReport) {
        return ApprovalResponse_1.ApprovalResponse.Denied;
    };
    EndOfChainExpenseHandler.prototype.registerNext = function (next) {
        throw new Error("End of chain handler must be the end of the chain!");
    };
    return EndOfChainExpenseHandler;
}());
EndOfChainExpenseHandler._instance = new EndOfChainExpenseHandler();
exports.default = EndOfChainExpenseHandler;
//# sourceMappingURL=EndOfChainExpenseHandler.js.map