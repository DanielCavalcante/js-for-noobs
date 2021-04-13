//Criação de variáveis e tipos de dados
var name = 'Xuxinha'; //String

var age = 27 //Number

var male = true //Boolean

//Funções e passagem de parâmetros
function printInformations() {
    return 'Nome => ' + name + '\nIdade => ' + age + '\nMasculino? ' + male;
}

function printInformationsThroughParams(name, age, male) {
    return 'Nome => ' + name + '\nIdade => ' + age + '\nMasculino? ' + male;
}

console.log(printInformations());

console.log(printInformationsThroughParams('Xuxinha', 30, true));
