import { UserService } from "./UserService";

export class CustomerService {
    constructor() {
        this.userService = new UserService();
    }

    getCustomers() {
        return this.userService.getUser();
    }
}