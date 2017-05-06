import { ApprovalResponse } from "../enums/ApprovalResponse";
import { IExpenseReport } from "../specs/IExpenseReport";
import { IExpenseHandler } from "../specs/IExpenseHandler";
import { IExpenseApprover } from "../specs/IExpenseApprover";
import EndOfChainExpenseHandler from "./EndOfChainExpenseHandler";

export default class ExpenseHandler implements IExpenseHandler {
	private readonly  _approver:IExpenseApprover;
	private _next:IExpenseHandler;
	
	constructor(expenseApprover:IExpenseApprover)
	{
		this._approver = expenseApprover;
		this._next = EndOfChainExpenseHandler.instance;
	}

	approve(expenseReport:IExpenseReport):ApprovalResponse {
		const response:ApprovalResponse = this._approver.approveExpense(expenseReport);

		if (response === ApprovalResponse.BeyondApprovalLimit) {
			return this._next.approve(expenseReport);
		}

		return response;
	}

	registerNext(next:IExpenseHandler):void{
		this._next = next;
	}
}