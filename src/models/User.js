import { Login } from "./Login";

export class User extends Login {
    constructor(firstName, lastName, email, phoneNum, password, isAdmin) {
        super(email, password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNum = phoneNum;
        this.isAdmin = isAdmin;
    }
}