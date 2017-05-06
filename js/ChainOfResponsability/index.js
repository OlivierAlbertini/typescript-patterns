"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpenseHandler_1 = require("./class/ExpenseHandler");
var Employee_1 = require("./class/Employee");
var ExpenseReport_1 = require("./class/ExpenseReport");
var ApprovalResponse_1 = require("./enums/ApprovalResponse");
function main() {
    var william = new ExpenseHandler_1.default(new Employee_1.default("William Worker", 0));
    var mary = new ExpenseHandler_1.default(new Employee_1.default("Mary Manager", 1000));
    var victor = new ExpenseHandler_1.default(new Employee_1.default("Victor Vicepres", 5000));
    var paula = new ExpenseHandler_1.default(new Employee_1.default("Paula President", 20000));
    william.registerNext(mary);
    mary.registerNext(victor);
    victor.registerNext(paula);
    var expenseReportAmount = 15000;
    var expense = new ExpenseReport_1.default(expenseReportAmount);
    var response = william.approve(expense);
    console.log("The request was " + ApprovalResponse_1.ApprovalResponse[response]);
}
exports.main = main;
//# sourceMappingURL=index.js.map