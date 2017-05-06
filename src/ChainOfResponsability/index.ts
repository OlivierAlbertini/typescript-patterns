import ExpenseHandler from "./class/ExpenseHandler";
import Employee from "./class/Employee";
import ExpenseReport from "./class/ExpenseReport";
import { ApprovalResponse } from "./enums/ApprovalResponse";

export function main():void {

	const william = new ExpenseHandler(new Employee("William Worker", 0));
	const mary = new ExpenseHandler(new Employee("Mary Manager", 1000));
	const victor = new ExpenseHandler(new Employee("Victor Vicepres", 5000));
	const paula = new ExpenseHandler(new Employee("Paula President", 20000));

	william.registerNext(mary);
	mary.registerNext(victor);
	victor.registerNext(paula);

	let expenseReportAmount = 15000;
	const expense = new ExpenseReport(expenseReportAmount);

	const response:ApprovalResponse = william.approve(expense);

	console.log(`The request was ${ApprovalResponse[response]}`);
}
