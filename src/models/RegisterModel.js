import { User } from "./User";

export class RegisterModel extends User {
    constructor(firstName, lastName, email, phoneNum, password, confirmPassword, isAdmin) {
        super(firstName, lastName, email, phoneNum, password, isAdmin);
        this.confirmPassword = confirmPassword;
    }
}