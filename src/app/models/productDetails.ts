import { SizeGuide } from './sizeGuide';
import { CareInstructions } from './careInstructions';
import { KeyFeatures } from './keyFeatures';
import { About } from './about';
import { ObjectState } from './objectState';
import { Type } from 'class-transformer';

export class ProductDetails {
  @Type(() => About)
  private about: About;
  @Type(() => KeyFeatures)
  private keyFeatures: KeyFeatures;
  @Type(() => CareInstructions)
  private careInstructions: CareInstructions;
  @Type(() => SizeGuide)
  private sizeGuide: SizeGuide;
   objectState = ObjectState.Unchanged;
  // tslint:disable-next-line:no-inferrable-types
  private visibility: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  private isActive: boolean = true;
  // tslint:disable-next-line: variable-name
  public readonly _id!: string;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();


  public get About(): About {
    return this.about;
  }
  public set About(value: About) {
    this.about = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
  public get KeyFeatures(): KeyFeatures {
    return this.keyFeatures;
  }
  public set KeyFeatures(value: KeyFeatures) {
    this.keyFeatures = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
  public get CareInstructions(): CareInstructions {
    return this.careInstructions;
  }
  public set CareInstructions(value: CareInstructions) {
    this.careInstructions = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
  public get SizeGuide(): SizeGuide {
    return this.sizeGuide;
  }
  public set SizeGuide(value: SizeGuide) {
    this.sizeGuide = value;
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
