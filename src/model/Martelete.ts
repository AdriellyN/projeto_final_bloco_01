import { Ferramentas } from "./Ferramentas";

export class Martelete extends Ferramentas {

    //Atributos
    
        private _marca: string;
    
        constructor(id: number, tipo: number, peso: number, periodoLocacao: number, marca: string) {
            super(id, tipo, peso, periodoLocacao);
            this._marca = marca;
        }
    
        public get marca(): string {
            return this._marca;
        }
    
        public set marca(marca: string) {
            this._marca = marca;
        }
    
        public visualizar(): void {
            super.visualizar();
            console.log(`Marca da Ferramenta: ${this._marca}`)
        }
    
    }