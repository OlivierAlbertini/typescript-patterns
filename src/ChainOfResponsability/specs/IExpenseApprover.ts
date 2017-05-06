import { ApprovalResponse } from "../enums/ApprovalResponse";
import { IExpenseReport } from "./IExpenseReport";

export interface IExpenseApprover {
	 approveExpense:(expenseReport:IExpenseReport)=>ApprovalResponse;
}