export class Negociacao {

// usando propriedade readonly permite pegar dados da classe porem nao permite modificar

    constructor(
        readonly data: Date, 
        readonly quantidade: number,  
        readonly valor: number) {}

    get volume() {

        return this.quantidade * this.valor;
    }

}