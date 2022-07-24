export class BillModel {
    constructor(billName, amount, date, companyId){
        this.billName = billName;
        this.amountDue = amount;
        this.companyId = companyId;
        this.dueDate = date;
    }

}

export class PostBill {
    billName = ''
}