
var SENHA = "goi123";


function verificarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
        return false;
    }

    
    var temMaiuscula = false;
    var temMinuscula = false;
    var temNumero = false;

    for (var i = 0; i < senha.length; i++) {
        var caractere = senha.charAt(i);

        if (caractere >= 'A' && caractere <= 'Z') {
            temMaiuscula = true;
        } else if (caractere >= 'a' && caractere <= 'z') {
            temMinuscula = true;
        } else if (!isNaN(parseInt(caractere))) {
            temNumero = true;
        }
    }

    return temMaiuscula && temMinuscula && temNumero;
}


if (verificarSenha(SENHA)) {
    alert("A senha é válida!");
} else {
    alert("A senha é inválida!");
}