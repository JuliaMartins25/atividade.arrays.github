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

//Colocar em ordem crescente
//exemplo1
console.log('array numA em ordem crescente:');
numA.sort();
console.log(numA);

//exemplo2
console.log('array numB em ordem crescente:');
numB.sort();
console.log(numB);

//juntar dois array
//exemplo1
numA.concat
console.log('array numA junto com array novoA:');
let novoA = numA.concat([1, 6, 9]);
console.log(numA);
console.log(novoA);

//exemplo2
numB.concat
console.log('array numB junto com array novoB:');
let novoB = numB.concat([5, 7, 4]);
console.log(numB);
console.log(novoB);

//Buscar valores (esse método vai responder a posição que esse valor colocado dentro dos parentes se encontra)
//se você colocar um valor que não tem ele ira retornar como resposta -1
novoA.indexOf();
console.log('encontre a posição que esta o número 5 do vetor novoA' );
console.log(novoA.indexOf(5));

//exemplo2
novoB.indexOf();
console.log('encontre a posição que esta o número 2 do vetor novoB');
console.log(novoB.indexOf(2));

//modifica a ordem do array original
//exemplo1
novoA.reverse();
console.log({ novoA });
let novoAinvertido = novoA.reverse();
console.log({ novoAinvertido });

//exemplo2
novoB.reverse();
console.log({ novoB });
let novoBinvertido = novoB.reverse();
console.log({ novoBinvertido });

//Declaro novo array
let alimentos = ['ovo', 'queijo', 'carne', 'pao'];
console.log('---exibir alimentos---');
console.log(alimentos);

let animais = ['cachorro', 'gato', 'hamster', 'pato'];
console.log('---exibir animais---');
console.log(animais);

//continuação de métodos

//spreed operator (copiar elementos para o array)
//exemplo1
console.log('exibir mais alimentos:');
let maisAlimentos = [...alimentos, 'leite', 'bolo'];
console.log(maisAlimentos);

//exemplo2
console.log('exibir mais animais:');
let maisAnimais = [...animais, 'coelho', 'pintinho'];
console.log(maisAnimais);

//declaro novo array
let meses = ['jan', 'fev', 'mar', 'abr'];
console.log('---exibir meses---');
console.log(meses)

let semana = ['seg', 'ter', 'qua', 'qui'];
console.log('---exibir semanas---');
console.log(semana);
