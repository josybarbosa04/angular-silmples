import { Filiacao } from "./filiacao";

export class Pessoa {
    nome = "";
    sobrenome = "";
    altura = 0;
    idade = 0;
    filiacao = new Filiacao();

    constructor() {
    }
}