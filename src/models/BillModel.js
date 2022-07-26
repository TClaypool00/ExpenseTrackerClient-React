export class BillModel {
    constructor(billName, amount, date, companyId, isActive){
        this.billName = billName;
        this.amountDue = amount;
        this.companyId = companyId;
        this.dueDate = date;
        this.isActive = isActive;
    }

}