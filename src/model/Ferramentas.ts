export abstract class Ferramentas {
    //Atributos
    private _id: number;
    private _tipo: number;
    private _peso: number;
    private _periodoLocacao: number;

    constructor(id: number, tipo: number, peso: number, periodoLocacao: number) {
        this._id = id;
        this._tipo = tipo;
        this._peso = peso;
        this._periodoLocacao = periodoLocacao;
    }

    public get id(): number {
        return this._id;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get peso(): number {
        return this._peso;
    }

    public get periodoLocacao(): number {
        return this._periodoLocacao;
    }

    public set id(value: number) {
        this._id = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set peso(value: number) {
        this._peso = value;
    }

    public set periodoLocacao(value: number) {
        this._periodoLocacao = value;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Martelete";
                break;
        }
        console.log("\n__________________________________________________")
        console.log("Dados da Ferramenta")
        console.log("--------------------------------------------------")
        console.log(`Código do produto (ID): ${this._id}`)
        console.log("Tipo: " + tipo)
        console.log(`Peso (em kg): ${this._peso}`)
        console.log(`Período de locação (em dias corridos): ${this._periodoLocacao}`)
    }

}