import { IExpenseReport } from "../specs/IExpenseReport";

export default class ExpenseReport implements IExpenseReport {
  _total:Number;

	constructor(total:Number) {
		this._total = total;
	}

	get total():Number {
    return this._total;
	}
}