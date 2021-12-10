import { User } from "@models/User";

export class UserService {
    public getUser(id: number): User {
        return new User();
    }
}