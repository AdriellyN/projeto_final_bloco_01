import { Ferramentas } from "../model/Ferramentas";

export interface FerramentaRepository{

    // CRUD 
    cadastrarFerramenta(ferramenta: Ferramentas): void;
    listarTodasFerramenta(): void;
    consultarFerramentaPorId(id: number): void;
    atualizarFerramenta(ferramenta: Ferramentas): void;
    deletarFerramenta(id: number): void;
}
