import { ApprovalResponse } from "../enums/ApprovalResponse";
import { IExpenseReport } from "./IExpenseReport";

export interface IExpenseHandler {
	approve:(expenseReport:IExpenseReport)=>ApprovalResponse;
	registerNext:(next:IExpenseHandler)=>void;
}