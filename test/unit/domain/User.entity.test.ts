import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { User, UserProps } from '../../../src/domain/User.entity';

let userInput: UserProps;
let user: User;

beforeAll(() => {
  userInput = {
    email: 'useremail@email.com',
    password: 'password',
    username: 'username',
    total_entries: 4
  };
});

beforeEach(() => {
  user = new User(userInput);
});

describe('User entity', () => {
  it('Should have the correct properties for a User', () => {
    expect(user).toHaveProperty('email', 'useremail@email.com');
    expect(user).toHaveProperty('password', 'password');
    expect(user).toHaveProperty('username', 'username');
    expect(user).toHaveProperty('total_entries', 4);
  });

  it('Should correctly update the total number of entries', () => {
    user.setTotalEntries(5);

    expect(user.total_entries).toBe(5);
  });
});
