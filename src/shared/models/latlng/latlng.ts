import { BaseObject } from '../base/object/object';

export class LatLng extends BaseObject {
  constructor(private params: { latitude: number; longitude: number }) {
    super();
  }

  get latitude(): number {
    return this.params.latitude;
  }

  get longitude(): number {
    return this.params.longitude;
  }

  get lat(): number {
    return this.latitude;
  }

  get lng(): number {
    return this.longitude
  }
}
