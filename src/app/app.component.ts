import { Component } from '@angular/core';
import { NodeJosyService } from './services/node-josy.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Projeto-Angular';
  texto = "";

  constructor(private nodeJosyService: NodeJosyService) {}

  carregarTexto() {

    console.log("carregarTexto");
    this.nodeJosyService.obterTextoPost()
      .subscribe((response: any) => {
        console.log(response);
        this.texto = response.mensagem;
      });
      
      console.log("fim");
  }
}
