export interface Continent {
  name: string;
}

export interface Language {
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

export interface DetailList {
  title: string;
  detail: string;
}

export interface SingleCountry extends Country {
  languages: Language[];
  capital: string;
}
