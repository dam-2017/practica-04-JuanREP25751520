import { Component, Input } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';
//Astorga Navarrete Yaremi
//Estrada Parra Juan Ramón

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  resultado:number;
  @Input () numero1;
  @Input () numero2;

  constructor( public params:NavParams,public navCtrl: NavController) {
    
  }

  onClick($event,val1,val2,op){
    if(val1+"" == "NaN" && val2+"" == "NaN"){
      document.getElementById('resul').innerHTML = 'Faltan ambos numeros';
    }else if(val1+"" == "NaN"){
      document.getElementById('resul').innerHTML = 'Falta numero 1';
    }else if (val2+"" == "NaN"){
      document.getElementById('resul').innerHTML = 'Falta numero 2';
    }else{
  
    switch(op){
      case 0:
        //suma
        this.resultado = parseInt(val1)+parseInt(val2);
        document.getElementById('signo').innerHTML = '+';
        break;
      case 1:
        //resta
        this.resultado = parseInt(val1)-parseInt(val2);
        document.getElementById('signo').innerHTML = '-';
        break;
      case 2:
        //division
        this.resultado = parseInt(val1)/parseInt(val2);
        document.getElementById('signo').innerHTML = '/';
        break;
      case 3:
        //multiplicacion
        this.resultado = parseInt(val1)*parseInt(val2);
        document.getElementById('signo').innerHTML = '*';
        break;
       case 4:
        //modulo
        this.resultado = parseInt(val1)%parseInt(val2);
        document.getElementById('signo').innerHTML = '%';
        
        break;
    }
    if(this.resultado+"" == "NaN"){
      document.getElementById('resul').innerHTML = 'Faltan numeros';
    }else{
      document.getElementById('resul').innerHTML = 'Resultado: '+this.resultado;
    }
  }
  }
}
