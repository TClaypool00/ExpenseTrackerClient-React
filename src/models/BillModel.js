export class BillModel {
    constructor(billName, amount, date, companyId, userId){
        this.billName = billName;
        this.amountDue = amount;
        this.companyId = companyId;
        this.dueDate = date;
        this.userId = userId;
    }

}