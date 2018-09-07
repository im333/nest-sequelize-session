export interface IUsersService<T, D> {
  findAll(): Promise<Array<T>>;
  findById(id: number): Promise<T | null>;
  findOne(options: Object): Promise<T | null>;
  create(users: D): Promise<T>;
  // update?(id: number, newValue: userAttribute): Promise<T | null>;
  // delete?(id: number): Promise<number>;
}
