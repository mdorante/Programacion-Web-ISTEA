import { Injectable } from '@angular/core';
import { Productos } from '../models/producto';

//el decorador @Injectable marca la clase como un servicio que 
//puede ser inyectado mediante el sub framework (Dependency Injector )
//el Injector sera el responsable de crear las intancias de nuestros 
//servicios  e inyectarlas en las clases que lo necesitemos 

//las instancias dentro del scope de nuestro Dependency Injector son manejadas 
//como singleton 
@Injectable({
  providedIn: 'root'
})

//este servicio nos brinda un listado de productos 
export class ProductosService {

  constructor() { }

  // este json es de una api web publica (no se cual)
  productos: Productos =  {"total_rows":6302,"offset":0,"rows":[
    {"id":"producto-0000000090100","key":"producto-0000000090100","value":{"_id":"producto-0000000090100","_rev":"2-024547d9efe755e7c9cb3d7298bb7e0f","uuid":"producto-0000000090100","marca":"SCHNEIDER","nombre":"Cerveza Botella Schneider x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000000135559","key":"producto-0000000135559","value":{"_id":"producto-0000000135559","_rev":"1-9526b0c155107518166a86592884ac4f","nombre":"REJILLA COMPACTA COL","uuid":"producto-0000000135559","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000000136204","key":"producto-0000000136204","value":{"_id":"producto-0000000136204","_rev":"1-01b52fe46799632a97c20148e4844861","nombre":"REJ.SECAVAJ.43X55CM","uuid":"producto-0000000136204","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000000144278","key":"producto-0000000144278","value":{"_id":"producto-0000000144278","_rev":"1-93172ef9ff02582aa25ce2b3d90dc3f2","nombre":"REJILLA AUTO 50X50CM","uuid":"producto-0000000144278","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000000498104","key":"producto-0000000498104","value":{"_id":"producto-0000000498104","_rev":"1-42c57af221c3c2022f5d9eef8ee7556c","nombre":"LECHE L.V.ENTERA","uuid":"producto-0000000498104","marca":"SIN MARCA","presentacion":"1.0 lt"}},
    {"id":"producto-0000000865463","key":"producto-0000000865463","value":{"_id":"producto-0000000865463","_rev":"2-829f9a220279ff6ef4487ff56d7b1a5b","uuid":"producto-0000000865463","marca":"SIN MARCA","nombre":"Trapo Piso Blanco Consorcio x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000000865470","key":"producto-0000000865470","value":{"_id":"producto-0000000865470","_rev":"2-d72b8db68dc68ae042ad082a762449d0","uuid":"producto-0000000865470","marca":"SIN MARCA","nombre":"Trapo Piso Gris Consorcio x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000001034448","key":"producto-0000001034448","value":{"_id":"producto-0000001034448","_rev":"2-4c4fc9c5eacd072f8f8374cf70ca13b2","uuid":"producto-0000001034448","marca":"SIN MARCA","nombre":"Trapo Piso Mil Usos x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000001121100","key":"producto-0000001121100","value":{"_id":"producto-0000001121100","_rev":"1-eadf48a159d1feb4b25375254818736d","nombre":"PAÃ‘O FRANELA CALIDAD","uuid":"producto-0000001121100","marca":"SIN MARCA","presentacion":"1.0 ud"}},
    {"id":"producto-0000007048012","key":"producto-0000007048012","value":{"_id":"producto-0000007048012","_rev":"2-6b908743394c7396e1d7ffd2dffb9a3e","uuid":"producto-0000007048012","marca":"SALTA","nombre":"Cerveza Blanca Botella Salta x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000007048029","key":"producto-0000007048029","value":{"_id":"producto-0000007048029","_rev":"1-6e6336a2dc1ddff0afa99d1a3d228d10","nombre":"ESQUELETO CERV BLANC","uuid":"producto-0000007048029","marca":"SALTA","presentacion":"1.0 ud"}},
    {"id":"producto-0000007048036","key":"producto-0000007048036","value":{"_id":"producto-0000007048036","_rev":"2-31769500d5e5da5b8d82627a3e5c9501","uuid":"producto-0000007048036","marca":"SALTA","nombre":"Cerveza Negra Botella Salta x 1 Un","presentacion":"1.0 un"}},
    {"id":"producto-0000007048043","key":"producto-0000007048043","value":{"_id":"producto-0000007048043","_rev":"1-3b5c686fcf957cb7f51a3ba005eb5d49","nombre":"ESQUELETO CERV NEGRA","uuid":"producto-0000007048043","marca":"SALTA","presentacion":"1.0 ud"}},
    {"id":"producto-0000007048074","key":"producto-0000007048074","value":{"_id":"producto-0000007048074","_rev":"1-94994990613adbf4ba21a43da7b2580d","nombre":"ENVASE CERVEZA 1890","uuid":"producto-0000007048074","marca":"QUILM","presentacion":"1.0 ml"}},
    {"id":"producto-0000007048081","key":"producto-0000007048081","value":{"_id":"producto-0000007048081","_rev":"1-66cf5800a98de5e3d981ee8162649af3","nombre":"ESQUELETO CERV 1890","uuid":"producto-0000007048081","marca":"QUILM","presentacion":"1.0 ud"}},
    {"id":"producto-0000040084107","key":"producto-0000040084107","value":{"_id":"producto-0000040084107","_rev":"1-1f3ca51255be9146eb7182144a010838","nombre":"Huevo de Chocolate Kinder con Sorpresa Caja x 20 Gr","uuid":"producto-0000040084107","marca":"KINDER","presentacion":"20.0 gr"}},
    {"id":"producto-0000042277132","key":"producto-0000042277132","value":{"_id":"producto-0000042277132","_rev":"1-6688139b116a9259bed0a727a80d9524","nombre":"Desmaquillador de Ojos Bifasico en Botella Nivea x 125 Ml","uuid":"producto-0000042277132","marca":"NIVEA","presentacion":"125.0 ml"}},
    {"id":"producto-0000042300083","key":"producto-0000042300083","value":{"_id":"producto-0000042300083","_rev":"1-26d009f3b078cb8f9eddbbcc9e8ff125","nombre":"Crema Facial Cuidado Nivea x 100 Ml","uuid":"producto-0000042300083","marca":"NIVEA","presentacion":"100.0 ml"}},
    {"id":"producto-0000075024956","key":"producto-0000075024956","value":{"_id":"producto-0000075024956","_rev":"1-5aedc456261b322b57e1e5d0a5c4545f","nombre":"Desodorante Antitranspirante en Barra V8 Rexona x 50 Gr","uuid":"producto-0000075024956","marca":"REXONA","presentacion":"50.0 gr"}},
    {"id":"producto-0000075026455","key":"producto-0000075026455","value":{"_id":"producto-0000075026455","_rev":"1-3831e22a23ab6280d2d595cc66745b64","nombre":"Desodorante Stick Nutritivo Rexona x 50 Gr","uuid":"producto-0000075026455","marca":"REXONA","presentacion":"50.0 gr"}},
    {"id":"producto-0000075027513","key":"producto-0000075027513","value":{"_id":"producto-0000075027513","_rev":"1-313e615db5d7f8bf4e576abaefda9785","nombre":"Desodorante Original Dove x 50 Gr","uuid":"producto-0000075027513","marca":"DOVE","presentacion":"50.0 gr"}},
    {"id":"producto-0000075032715","key":"producto-0000075032715","value":{"_id":"producto-0000075032715","_rev":"1-80061bb65fb9cf193db50620b2bf0a5a","nombre":"Cerveza Corona x 335 Cc","uuid":"producto-0000075032715","marca":"CORONA","presentacion":"355.0 cc"}},
    {"id":"producto-0000077900302","key":"producto-0000077900302","value":{"_id":"producto-0000077900302","_rev":"1-afdb93babf4afd1f38b824decc39b0a5","nombre":"Repelente Crema Off x 60 Gr","uuid":"producto-0000077900302","marca":"OFF","presentacion":"60.0 gr"}},
    {"id":"producto-0000077900845","key":"producto-0000077900845","value":{"_id":"producto-0000077900845","_rev":"1-1a43ea21962e6afb3008d7f06556e627","nombre":"Galletitas BanÌƒadas con Chocolate con Relleno de Limon Terrabusi Tita x 18 Gr","uuid":"producto-0000077900845","marca":"TITA","presentacion":"18.0 gr"}},
    {"id":"producto-0000077903501","key":"producto-0000077903501","value":{"_id":"producto-0000077903501","_rev":"1-6b8fbf12a0a557bd79c93b4bd1780a42","nombre":"Obleas Rellena Bagley Opera x 55 Gr","uuid":"producto-0000077903501","marca":"OPERA","presentacion":"55.0 gr"}},
    {"id":"producto-0000077903518","key":"producto-0000077903518","value":{"_id":"producto-0000077903518","_rev":"1-417d486ba91b12d33f4db495ec30620f","nombre":"Obleas Rellena Bagley Opera x 92 Gr","uuid":"producto-0000077903518","marca":"OPERA","presentacion":"92.0 gr"}},
    {"id":"producto-0000077903785","key":"producto-0000077903785","value":{"_id":"producto-0000077903785","_rev":"1-7f000a90ded884b7170ce5c9b30df7bd","nombre":"Alfajor Mousse Triple Milka x 55 Gr","uuid":"producto-0000077903785","marca":"MILKA","presentacion":"55.0 gr"}},
    {"id":"producto-0000077903792","key":"producto-0000077903792","value":{"_id":"producto-0000077903792","_rev":"1-7516e6ded1f128390c2f045f2390096e","nombre":"Alfajor Triple Dulce de Leche Terrabusi x 70 Gr","uuid":"producto-0000077903792","marca":"TERRABUSI","presentacion":"70.0 gr"}},
    {"id":"producto-0000077906106","key":"producto-0000077906106","value":{"_id":"producto-0000077906106","_rev":"2-2dd057b4237899182afbbce539469d2a","uuid":"producto-0000077906106","marca":"CRIADORES","nombre":"Whisky Criadores En Petaca x 195 Cc","presentacion":"195.0 cc"}},
    {"id":"producto-0000077912732","key":"producto-0000077912732","value":{"_id":"producto-0000077912732","_rev":"1-102e8be9b8c3b1fc4a7a8301214b3003","nombre":"Caramelos Halls Cherry Paquete x 28 Gr","uuid":"producto-0000077912732","marca":"HALLS","presentacion":"28.0 gr"}},
    ]};

}
