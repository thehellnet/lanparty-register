class DataService {
  private _name!: string;
  private _email!: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}

const dataService = new DataService();
export default dataService;
