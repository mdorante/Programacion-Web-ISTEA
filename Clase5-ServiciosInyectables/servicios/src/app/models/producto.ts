export interface Value {
  _id: string;
  _rev: string;
  uuid: string;
  marca: string;
  nombre: string;
  presentacion: string;
}

export interface Row {
  id: string;
  key: string;
  value: Value;
}

export interface Productos {
  total_rows: number;
  offset: number;
  rows: Row[];
}
