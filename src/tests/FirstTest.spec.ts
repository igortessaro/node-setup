import { User } from '../models/User';

test('First test', () => {
    const user = new User();
    user.name = 'John';
    user.email = 'test@test.com';

    expect(user.name).toBe('John');
});