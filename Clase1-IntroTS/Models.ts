export interface MortyObject {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface RootObject {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;

  // ? indica que es opcional, lo colocamos como tipo de dato any porque no estamos seguros de que tipo de dato puede venir
  prev?: any;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: LocationObject;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface LocationObject {
  name: string;
  url: string;
}
