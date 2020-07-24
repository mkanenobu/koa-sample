interface User {
  id: number;
  name: string;
}
const MockDB: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Bob" },
];

export class UserController {
  static getAll(): User[] {
    return MockDB;
  }

  static findById({ id }: { id: string }): User | undefined {
    return MockDB.find((user) => user.id === Number(id));
  }
}
