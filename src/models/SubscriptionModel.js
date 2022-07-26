export class SubscriptionModel {
    constructor(name, amountDue, companyId, dueDate, isActive) {
        this.name = name;
        this.amountDue = amountDue;
        this.companyId = companyId;
        this.dueDate = dueDate;
        this.isActive = isActive;
    }
}