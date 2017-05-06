import { IExpenseHandler } from "../specs/IExpenseHandler";
import { ApprovalResponse } from "../enums/ApprovalResponse";
import { IExpenseReport } from "../specs/IExpenseReport";

export default class EndOfChainExpenseHandler implements IExpenseHandler {

  private static readonly _instance: EndOfChainExpenseHandler = new EndOfChainExpenseHandler();

  static get instance(): EndOfChainExpenseHandler {
    return this._instance;
  }

  approve(expenseReport: IExpenseReport): ApprovalResponse {
    return ApprovalResponse.Denied;
  }

  registerNext(next: IExpenseHandler): void {
    throw new Error("End of chain handler must be the end of the chain!");
  }
}