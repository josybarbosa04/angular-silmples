import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent implements OnInit {

  mostrarFonte = false;

  arrayCores = ['Preto', 'Branco', 'Verde', 'Vermelho', 'Azul'];

  constructor() { }

  ngOnInit(): void {
  }

}
