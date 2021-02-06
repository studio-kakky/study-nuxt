import { BaseObject } from '../base/object/object';

interface AdaptedLocation {
  city: string;
  country: string;
  address1: string;
  address2: string;
  address3: string;
  state: string;
  zipCode: string;
}

export class AppLocation extends BaseObject {
  constructor(private params: AdaptedLocation) {
    super();
  }

  get city(): string {
    return this.params.city;
  }

  get country(): string {
    return this.params.country;
  }

  get address1(): string {
    return this.params.address1;
  }

  get address2(): string {
    return this.params.address2;
  }

  get address3(): string {
    return this.params.address3;
  }

  get state(): string {
    return this.params.state;
  }

  get zipCode(): string {
    return this.params.zipCode;
  }
}
