import { IExpenseApprover } from "../specs/IExpenseApprover";
import { ApprovalResponse } from "../enums/ApprovalResponse";
import { IExpenseReport } from "../specs/IExpenseReport";

export default class Employee implements IExpenseApprover {
  private readonly _name: string;
  private readonly _approvalLimit:number;

	constructor(name:string, approvalLimit:number) {
		this._name = name;
		this._approvalLimit = approvalLimit;
	}

	get name() { 
    return this._name;
   }

	approveExpense(expenseReport:IExpenseReport):ApprovalResponse {
		return expenseReport.total > this._approvalLimit
				? ApprovalResponse.BeyondApprovalLimit
				: ApprovalResponse.Approved;
	}
}