import { Ferramentas } from "../model/Ferramentas";
import { FerramentaRepository } from "../repository/FerramentasRepository";
import { colors } from "../util/Cores";

export class FerramentasController implements FerramentaRepository{

    private listaFerramentas = new Array<Ferramentas>();
    public id: number = 0;

    cadastrarFerramenta(ferramenta: Ferramentas): void {
        this.listaFerramentas.push(ferramenta);
        console.log("A Ferramenta foi cadastrada no sistema!");
    }
    listarTodasFerramenta(): void {
        for(let ferramenta of this.listaFerramentas){
            ferramenta.visualizar();
        }
    }
    consultarFerramentaPorId(id: number): void {
        const buscaFerramenta = this.buscarNoArray(id);
        if (buscaFerramenta !== null)
            buscaFerramenta.visualizar();
        else
        console.log(colors.fg.redstrong,'\nFerramenta não Encontrada!', colors.reset);
    }
    atualizarFerramenta(ferramenta: Ferramentas): void {
        const buscaFerramenta = this.buscarNoArray(ferramenta.id);
        if (buscaFerramenta !== null){
            this.listaFerramentas[this.listaFerramentas.indexOf(buscaFerramenta)] = ferramenta;
            console.log("O Cadastro da Ferramenta foi atualizado no sistema.");
        }
        else
            console.log(colors.fg.redstrong,'\nFerramenta não Encontrada!', colors.reset);
    }
    deletarFerramenta(id: number): void {
        const buscaFerramenta = this.buscarNoArray(id)
        
        if (buscaFerramenta !== null){
            this.listaFerramentas.splice(this.listaFerramentas.indexOf(buscaFerramenta), 1);
            console.log("A Ferramenta foi deletada do sistema!");
        }
        else
        console.log(colors.fg.redstrong,'\nFerramenta não Encontrada!', colors.reset);    }


    public gerarId(): number{
        return ++this.id;
    }

    public buscarNoArray(id: number) : Ferramentas | null{
        for (let ferramenta of this.listaFerramentas){
            if(ferramenta.id === id)
                return ferramenta;
        }
        return null;
    }
}