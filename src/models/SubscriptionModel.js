export class SubscriptionModel {
    constructor(name, amountDue, companyId, dueDate, userId) {
        this.name = name;
        this.amountDue = amountDue;
        this.companyId = companyId;
        this.dueDate = dueDate;
        this.userId = userId;
    }
}