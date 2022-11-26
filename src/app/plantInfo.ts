export class PlantInfo {
  id: String;
  latin: String;
  family: String;
  common: String[];
  category: String;
  origin: String;
  climate: String;
  tempmax: { celsius: Number; fahrenheit: Number };
  tempmin: { celsius: Number; fahrenheit: Number };
  ideallight: String;
  toleratedlight: String;
  watering: String;
  insects: String[];
  diseases: String[];
  use: String[];
}
