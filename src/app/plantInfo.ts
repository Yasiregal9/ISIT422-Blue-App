export class PlantInfo {
  id: String;
  latin: String;
  family: String;
  common: String[];
  category: String;
  origin: String;
  climate: Number;
  tempmax: { celsius: Number; fahrenheit: Number };
  tempmin: { celsius: Number; fahrenheit: Number };
  ideallight: Number;
  toleratedlight: Number;
  watering: String;
  insects: String[];
  diseases: String;
  use: String[];
}
