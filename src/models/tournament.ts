export class Tournament {
  private _id!: number;
  private _name!: string;
  private _game!: string;
  private _start!: Date;
  private _end!: Date;
  private _registrationStart!: Date;
  private _registrationEnd!: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get game(): string {
    return this._game;
  }

  set game(value: string) {
    this._game = value;
  }

  get start(): Date {
    return this._start;
  }

  set start(value: Date) {
    this._start = value;
  }

  get end(): Date {
    return this._end;
  }

  set end(value: Date) {
    this._end = value;
  }

  get registrationStart(): Date {
    return this._registrationStart;
  }

  set registrationStart(value: Date) {
    this._registrationStart = value;
  }

  get registrationEnd(): Date {
    return this._registrationEnd;
  }

  set registrationEnd(value: Date) {
    this._registrationEnd = value;
  }
}
