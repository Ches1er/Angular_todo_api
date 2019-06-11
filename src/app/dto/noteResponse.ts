import {Note} from './note';


export class NoteResponse {
  constructor(private pData: Array<Note>,
              private pStatus: string,
              private pErrors: string) {
  }

  get data(): Array<Note> {
    return this.pData;
  }

  set data(value: Array<Note>) {
    this.pData = value;
  }

  get status(): string {
    return this.pStatus;
  }

  set status(value: string) {
    this.pStatus = value;
  }

  get errors(): string {
    return this.pErrors;
  }

  set errors(value: string) {
    this.pErrors = value;
  }

  public static fromJson(jsonObj: any): NoteResponse {
    return new NoteResponse(
      jsonObj.data.map(e => Note.fromJson(e)),
      jsonObj.status,
      jsonObj.errors
    );
  }
}
