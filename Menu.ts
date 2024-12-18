import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {
        
        console.log("**************************************************************");
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
        console.log("**************************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nPrograma Finalizado.");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCadastrar Ferramenta \n");

                keyPress();
                break;

            case 2:
                console.log("\nListar Todas as Ferramentas \n");
                
                keyPress();
                break;

            case 3:
                console.log("\nConsultar Ferramenta por Id \n");

                keyPress();
                break;


            case 4:
                console.log("\nAtualizar dados da Ferramenta");
                
                keyPress();
                break;

            case 5:
                console.log("\nDeletar Ferramenta");
                
                keyPress();
                break;

            default:
                console.log("\nOpção Inválida!");
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
