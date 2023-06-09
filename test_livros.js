function verificarApenasLetras(campo) {
    var regex = /^[a-zA-Z]+$/;
    var mensagem = "Campo esperado: somente letras" + "\nCampo recebido: " + campo + "\n";

    if (regex.test(campo)) {
        console.log(true);
    } else {
        console.error(mensagem += "Campo invalido! digite apenas letras")
    }
}

function verificarApenasNumeros(campo) {
    var regex = /^[0-9]+$/;
    var mensagem = "Campo esperado: somente Numeros" + "\nCampo recebido: " + campo + "\n";

    if (regex.test(campo)) {
        console.log (true);
    } else {
        console.error(mensagem += "Campo invalido! digite apenas Numeros")
    }
}

function verificarTamanho(esperado, recebido) {
    if (recebido === undefined) {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
    else if (recebido >= esperado) {
        console.info(true);
        return true;
    }
    else {
        console.error(`Esperado: ${esperado}`);
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}



function capturar() {
    var nome_do_livro = document.getElementById("Titulo").value;
    var isbn = document.getElementById("isbn").value;
    verificarApenasLetras(nome_do_livro);
    verificarTamanho(15, nome_do_livro.length)
    verificarApenasNumeros(isbn)
    verificarTamanho(10, isbn.length)
}