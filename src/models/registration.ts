export class Registration {
  private _name!: string;
  private _email!: string;
  private _tournamentId!: number;
  private _nick!: string;

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

  get tournamentId(): number {
    return this._tournamentId;
  }

  set tournamentId(value: number) {
    this._tournamentId = value;
  }

  get nick(): string {
    return this._nick;
  }

  set nick(value: string) {
    this._nick = value;
  }
}
