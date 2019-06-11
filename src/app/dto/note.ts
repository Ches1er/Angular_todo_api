import {Category} from './category';

export class Note {
  constructor(private pId: number, private pName: string, private pDesc: string) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get desc(): string {
    return this.pDesc;
  }

  set desc(value: string) {
    this.pDesc = value;
  }

  public static fromJson(jsonObj: any): Note {
    return new Note(jsonObj.id, jsonObj.name, jsonObj.desc);
  }
  public toJson() {
    return {
      id: this.id,
      name: this.name,
      desc: this.desc
    };
  }
}
