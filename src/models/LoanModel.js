export class LoanModel {
    constructor(loanName, monthlyAmtDue, totalAmtDue, remaingAmt, companyId, dateDue) {
        this.loanName = loanName;
        this.monthlyAmtDue = monthlyAmtDue;
        this.totalAmtDue = totalAmtDue;
        this.remaingAmt = remaingAmt;
        this.companyId = companyId;
        this.dateDue = dateDue;
    }
}