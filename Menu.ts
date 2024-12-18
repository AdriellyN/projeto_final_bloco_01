import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { FerramentasController } from "./src/controller/FerramentasController";
import { Martelete } from "./src/model/Martelete";

export function main() {

    let opcao, id, tipo, peso, periodoLocacao: number;
    let marca: string = "";

    const ferramentas = new FerramentasController();

    const tipoFerramentas = ["Martelete"];

    while (true) {
        console.log(colors.bg.black, colors.fg.redstrong, "**************************************************************");
        console.log("                                                              ");
        console.log("       Ferramentals Loc. - Aluguel por Demanda                ");
        console.log("                                                              ");
        console.log("**************************************************************");
        console.log("                                                              ");
        console.log("               1 - Cadastrar Ferramenta                       ");
        console.log("               2 - Listar Todas as Ferramentas                ");
        console.log("               3 - Consultar Ferramenta por Id                ");
        console.log("               4 - Atualizar Ferramenta                       ");
        console.log("               5 - Deletar Ferramenta                         ");
        console.log("               0 - Sair                                       ");
        console.log("                                                              ");
        console.log("**************************************************************", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.black, "\nPrograma Finalizado.");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCadastrar Ferramenta \n", colors.reset);

                console.log("Selecione o Tipo de Ferramenta: ");
                tipo = readlinesync.keyInSelect(tipoFerramentas, "", { cancel: false }) + 1;

                console.log("Digite o Peso da Ferramenta (em kg): ");
                peso = readlinesync.questionInt();

                console.log("Digite a Marca da Ferramenta: ");
                marca = readlinesync.question();

                console.log("Digite o Período de Locação (Dias corridos): ");
                periodoLocacao = readlinesync.questionInt();

                switch (tipo) {
                    case 1:
                        ferramentas.cadastrarFerramenta(new Martelete(ferramentas.gerarId(), tipo, peso, periodoLocacao, marca));
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\nListar Todas as Ferramentas \n", colors.reset);
                ferramentas.listarTodasFerramenta();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\nConsultar Ferramenta por Id \n", colors.reset);

                console.log("ID da Ferramenta: ");
                id = readlinesync.questionInt();
                ferramentas.consultarFerramentaPorId(id);
                keyPress();
                break;


            case 4:
                console.log(colors.fg.whitestrong, "\nAtualizar dados da Ferramenta", colors.reset);

                console.log("ID da Ferramenta: ");
                id = readlinesync.questionInt();

                let ferramenta = ferramentas.buscarNoArray(id);

                if (ferramenta != null) {
                    tipo = ferramenta.tipo;
                    peso = ferramenta.peso;

                    console.log("Digite o Período de Locação (Dias corridos): ");
                    periodoLocacao = readlinesync.questionInt();

                    console.log("Digite a Marca da Ferramenta: ");
                    marca = readlinesync.question();

                    switch (tipo) {
                        case 1:
                            ferramentas.atualizarFerramenta(new Martelete(id, tipo, peso, periodoLocacao, marca));
                            break;
                    }
                }else {
                    console.log(colors.fg.redstrong,"Ferramenta não encontrada!", colors.reset)
                }
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\nDeletar Ferramenta", colors.reset);
                console.log("ID da Ferramenta: ");
                id = readlinesync.questionInt();
                ferramentas.deletarFerramenta(id)
                keyPress();
                break;

            default:
                console.log(colors.fg.redstrong, "\nOpção Inválida!", colors.reset);
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Adrielly do Nascimento - adriellynr@gmail.com");
    console.log("github.com/AdriellyN");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
