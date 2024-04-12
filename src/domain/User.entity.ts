type UserProps = {
  email: string;
  password: string;
  username: string;
  total_entries: number;
};

export default class User {
  email: string;

  password: string;

  username: string;

  total_entries: number;

  constructor(user: UserProps) {
    this.email = user.email;
    this.password = user.password;
    this.username = user.username;
    this.total_entries = user.total_entries;
  }

  setTotalEntries(total_entries: number) {
    this.total_entries = total_entries;
  }
}
