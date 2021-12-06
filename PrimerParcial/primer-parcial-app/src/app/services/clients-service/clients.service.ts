import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {

  constructor() {}

  getAll(){
    return listaClientes
  }
}

const listaClientes = [
  {
    country: 'BRA',
    client: 'HCI',
    balance: 100033,
    moneda: 'reales',
  },
  {
    country: 'CHL',
    client: 'I-Payout',
    balance: 100033,
    moneda: 'dolar',
  },
  {
    country: 'ARG',
    client: 'Wester',
    balance: 1053413,
    moneda: 'pesos',
  },
  {
    country: 'COL',
    client: 'thunes',
    balance: 1543033,
    moneda: 'dolar',
  },
  {
    country: 'MEX',
    client: 'HCI',
    balance: 1123033,
    moneda: 'dolar',
  },
  {
    country: 'URY',
    client: 'Nium',
    balance: 179033,
    moneda: 'dolar',
  },
];
