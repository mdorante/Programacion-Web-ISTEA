import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients-service/clients.service';
import { Client } from '../../services/clients-service/client';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //Variables
  clientes: Client[];
  selected: string
  listaFormateada: any []
  copiaFormateada: any []

  //Recibe JSON con todos los elementos y se asigna el llamado a la función que arma la lógica con el JSON ordenado.
  constructor(private clientService: ClientsService) {
    this.clientes = clientService.getAll();
    this.listaFormateada = this.formatearLista()
  }

  ngOnInit(): void {
    this.copiaFormateada = [...this.listaFormateada]
  }

  formatearLista() {
    //Ordena la lista original.
    let sortedList = _.orderBy(this.clientes, ['country'], ['asc']);
    
    return sortedList.map((element) => ({
      country: element.country,
      client: element.client,
      balance: `${this.currencyConverter(element.moneda)}  ${element.balance}`,
      moneda: this.currencyConverter(element.moneda),
    }));
  }

  currencyConverter(moneda: string) {
    if (moneda == 'dolar') {
      return 'USD';
    } else if (moneda == 'pesos') {
      return 'ARS';
    } else if (moneda == 'reales') {
      return 'BRL';
    } else {
      return '';
    }
  }

  filterList() {
    this.copiaFormateada = this.listaFormateada.filter(x => x.country == this.selected)
  }

  removeFilter() {
    this.selected = ""
    this.copiaFormateada = this.listaFormateada
  }
}
