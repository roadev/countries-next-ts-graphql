export interface Continent {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  emoji: string;
  currency: string;
  continent: Continent;
}

export interface SerializedCountry {
  name: string;
  code: string;
  emoji: string;
  currency: string;
  continent: string;
}
