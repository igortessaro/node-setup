import { User } from "@models/User";

export class UserController {
    send(): User {
        const user = new User();

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}
