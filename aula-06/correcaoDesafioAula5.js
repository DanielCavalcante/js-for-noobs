let nota1 = 10;
let nota2 = 5;
let nota3 = 0;

function calcularMedia() {
    var totalNotas = nota1 + nota2 + nota3;
    var media = totalNotas / 3; 
    if (media >= 7) {
        return console.log('Aprovado!')
    }
    return console.log('Reprovado');

}

calcularMedia();