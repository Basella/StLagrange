import { ObjectState } from './objectState';

export class About {
  private descriptionTitle!: string;
  private abtDescription: string;
   objectState = ObjectState.Unchanged;
  // tslint:disable-next-line:no-inferrable-types
  private visibility: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  private isActive: boolean = true;
  // tslint:disable-next-line: variable-name
  public readonly _id!: string;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();


  public get DescriptionTitle(): string {
    return this.descriptionTitle;
  }
  public set DescriptionTitle(value: string) {
    this.descriptionTitle = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get AbtDescription(): string {
    return this.abtDescription;
  }
  public set AbtDescription(value: string) {
    this.abtDescription = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get Visibility(): boolean {
    return this.visibility;
  }

  public set Visibility(value: boolean) {
    this.visibility = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get IsActive(): boolean {
    return this.isActive;
  }

  public set IsActive(value: boolean) {
    this.isActive = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get CreatedAt(): Date {
    return this.createdAt;
  }

  public set CreatedAt(value: Date) {
    this.createdAt = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get UpdatedAt(): Date {
    return this.updatedAt;
  }

  public set UpdatedAt(value: Date) {
    this.updatedAt = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
}
