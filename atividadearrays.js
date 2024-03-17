//Aula array de javascrip!

//Declaro variavel numA para primeiro array
let numA = [5, 8, 3, 4, 7, 9, 7, 1, 2];

//Declaro variavel numB para segundo array
let numB = [1, 2, 6, 9, 5, 4, 7, 9];

console.log("--- exibir Array A ---");
console.log(numA);

console.log("--- exibir Array B ---");
console.log(numB);

//exemplos de métodos

//Remover valor que está em uma posição expecífica (apartir do indicie tal eu vou apagar tantos elementos)
//exemplo1
console.log('---exibir valores removidos de numA---');
numA.splice();
console.log(numA.splice(5, 4));

console.log('---exibir novo array numA---');
console.log(numA);

//exemplo2
console.log('---exibir valores removidos de numB---');
console.log(numB.splice(4, 4));

console.log('---exibir novo array numB---');
console.log(numB);

//comprimento do array
//exemplo1
console.log('comprimento do array numA:');
numA.length;
console.log(numA.length);

//exemplo2
numB.length;
console.log('comprimento do array numB:');
console.log(numB.length);
