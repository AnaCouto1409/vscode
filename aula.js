function verificar (tempoPadrao,tempo) {

    if (tempo < tempoPadrao) {
        console.log("Tempo Insuficiente")              // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
    }
    else if (tempo >= 3 * tempoPadrao) {
        console.log("Kabummmm!!!")                           // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
    }
    else if (tempo >= 2 * tempoPadrao) {
        console.log("A comida queimou")            // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
    }
    else {
        console.log("Prato pronto, bom apetite")           // No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
    }

}
function menu(prato, tempo) {

    let tempoPadrao = 0;                      //default

    switch (prato) {

        case "Pipoca":
            tempoPadrao = 10;
            verificar(tempoPadrao, tempo)              
            break;

        case "Macarrão":
            tempoPadrao = 8;
            verificar(tempoPadrao, tempo)
            break;

        case "Carne":
            tempoPadrao = 15;
            verificar(tempoPadrao, tempo)
            break;

        case "Feijão":
            tempoPadrao = 12;
            verificar(tempoPadrao, tempo)
            break;

        case "Brigadeiro":
            tempoPadrao = 8;
            verificar(tempoPadrao, tempo)
            break;

        default:
            console.log("Prato Inexistente")               // Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
    }
}
console.log("- Pipoca:")
menu("Pipoca", 5)
menu("Pipoca", 10)
menu("Pipoca", 20)
menu("Pipoca", 30)
menu("Chocolate", 10)

console.log("- Macarrão:")
menu("Macarrão", 4)
menu("Macarrão", 8)
menu("Macarrão", 16)
menu("Macarrão", 24)
menu("Chocolate", 8)

console.log("- Carne:")
menu("Carne", 10)
menu("Carne", 15)
menu("Carne", 30)
menu("Carne", 45)
menu("Chocolate", 15)

console.log("- Feijão:")
menu("Feijão", 10)
menu("Feijão", 12)
menu("Feijão", 24)
menu("Feijão", 36)
menu("Chocolate", 12)

console.log("- Brigadeiro:")
menu("Brigadeiro", 5)
menu("Brigadeiro", 8)
menu("Brigadeiro", 16)
menu("Brigadeiro", 24)
menu("Chocolate", 8)