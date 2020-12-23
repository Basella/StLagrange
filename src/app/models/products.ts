import { ObjectState } from './objectState';
import { Type } from 'class-transformer';
import { ProductDetails } from './productDetails';

export class Product {
  private imageSrc: string[];
  private description: string;
  private price!: string;
  @Type(() => ProductDetails)
  private productDetails: ProductDetails[] = [];
   objectState = ObjectState.Unchanged;
  // tslint:disable-next-line:no-inferrable-types
  private visibility: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  private isActive: boolean = true;
  // tslint:disable-next-line: variable-name
  public readonly _id!: string;
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();


  public get ImageSrc(): string[] {
    return this.imageSrc;
  }
  public set ImageSrc(value: string[]) {
    this.imageSrc = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
  public get Description(): string {
    return this.description;
  }
  public set Description(value: string) {
    this.description = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }
  public get Price(): string {
    return this.price;
  }

  public set Price(value: string) {
    this.price = value;
    if (this.objectState === ObjectState.Unchanged) {
      this.objectState = ObjectState.Changed;
    }
  }

  public get ProductDetails(): ProductDetails[] {
    return this.productDetails;
  }

  public set ProductDetails(value: ProductDetails[]) {
    this.productDetails = value;
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
