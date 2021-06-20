import { Mappable } from './CustomMap';
import faker from "faker";
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }
  markerContent():string{
    return `Name: ${this.name}`
  }
}
