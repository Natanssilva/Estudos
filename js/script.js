

/*let number1 = window.prompt('Digite um numero:');
let number2 = window.prompt('Digite outro numero :');

    number1 = Number(number1);
    number2 = Number(number2);

    let resultado = number1 + number2;
    alert(`o resultado da adição dos valores é ${resultado}`)
   

    let varA = 'A'; //B
    let varB = 'B';  //C
    let varC = 'C'; //A

    const varAreserva = varA;

    varA = varB;
    varB = varC;
    varC = varAreserva;

    console.log(varA, varB, varC)

    //FORMA mais dinamica de fazer isso

   [varA,varB,varC] = [varC,varB,varA]

   console.log(varA, varB, varC);      

   let umaString = 'texto';

   console.log(umaString.indexOf('x')) //diz em qual indice ta a letra x mas isso poderia ser feito com arrays

   console.log(umaString[2]) //mostra que o x está no indice 2

   console.log(umaString.replace('texto', 'Uma nova escrita')) //substitui a palavra texto pela frase 'uma nova escrita' mas não altera o valor atribuido a string

   console.log(umaString.length) // tamanho da string

   let novaString = 'o rato roeu a roupa do rei de roma';

   console.log(novaString.slice(2,6)) // meio que divide a string diante os indices que vc quer, no caso 2 e 6 deixam a palavra RATO apenas. 

   console.log(novaString.toUpperCase())// coloca a string inteira em letra maiuscula

    */

   //EXERCICIOS AULA 13

   /*
   const nome = window.prompt('Digite seu nome completo:');

   document.body.innerHTML += `O seu nome é ${nome} <br>`;
   document.body.innerHTML += `O seu nome tem letras ${nome.length - 4} <br>`;
   document.body.innerHTML += `A segunda letra do seu nome é  ${nome[1]} <br>`;
   document.body.innerHTML += `Qual o primeiro inidice da primeira letra no seu nome? ${nome.indexOf(nome[0])} <br>`;
   document.body.innerHTML += `Qual o ultimo indice de  ultima letra 'a' do seu nome? ${nome.lastIndexOf('a')} <br>`; 
   document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br>`;
   document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`;
   document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()} <br>`;
   document.body.innerHTML += `Seu nome com letras minusculas ${nome.toLowerCase()} <br>`;

   */

  /* let num1 = 0.7; //number
   let num2 = 0.3;  //number


   console.log(num1+= num2);

   console.log(Number(num1.toFixed(2)))
   console.log(Number.isInteger(num1));
   */



   // console.log(num1.toString() + num2); // convertendo para string
   // num1 = num1.toString(); //alterando o valor para uma string permanente
   //console.log(typeof num1);

   // console.log(num1.toString(2)); // vendo a forma binária do numero

   // console.log(num1.toFixed(2)) // serve para arredondar o numero com muitas casas decimais de acordo com o parenteses 
   
   // console.log(Number.isInteger(num1)); //esse método isInteger retorna true ou false se o número é inteiro ou ponto flutuante(com casa decimal)
   
   //let temp = num1 * 'Olá';
   //console.log(Number.isNaN(temp)); // retorna boolean pra saber se a conta ta errada e retornar NaN, se a conta fosse válida retornaria false


   //Sobre o OBJETO MATH e as funções(Métodos)
   //Métodos são funções que estão dentro de um objeto, no caso aqui, do objeto math

   //let num1 = 9;

   //let num2 = Math.floor(num1); //Math.floor arredonda para baixo
   //let num2 = Math.ceil(num1); //Math.ceil arredonda para cima, no caso 10
   //let num2 = Math.round(num1); //Arredonda para o mais proximo, independente de ser para baixo ou para cima, da metade é pra cima, menos q isso para baixo

   

   //console.log(Math.max(1,2,3,4,5,-90, 1500,7,-5)); //Math.max mostra o maior número de uma sequencia
   //console.log(Math.min(1,2,3,4,5,-90, 1500,7,-5)); //Math.min mostra o menor numero de uma sequencia

   //const aleatório = Math.random() * (10 - 5) + 5; // número aleatorio fica entre 10 e 5 agora

   //console.log(Math.random()); //Cria um número aleatório entre 0  e 1

   //console.log(Math.PI) // mostra o valor de PI

   //console.log(Math.pow(2,3)); // Serve para fazer potenciação, no caso 2 elevado a 3. MAS tem operador de pontencia no javascript também
   //console.log(2 ** 3) Mesma coisa de Math.pow

   //console.log(num1 ** (1/2)); // uma forma mais matemática de calcular a raiz quadrada de um valor, no caso o 3

   //console.log(num1 ** 0.5) // mesma coisa da raiz quadrada de forma diferente 

   // NO javascript tem como dividir um valor por 0 e não causa erro, e ainda por cima é contabilizado como verdadeiro além de ser considerado outro valor númerico, no caso o "Inifinity" EX:

   //console.log(!!(100 / 0)); //Infinity =  basicamente chega em inifinity o quanto mais perto estiver da casa 0. E retorna como true no boolean EX: 
   //console.log(100 / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001); //Infinity 


   /*EXERCICIO
   let numero = Number(window.prompt('Digite seu número:'));


   const introduction = document.getElementById('num');
   const text = document.getElementById('texto');
   
   introduction.innerHTML = `Seu número é ${numero}`
   text.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5} </p>`;

   text.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;


   text.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;

   text.innerHTML += `<p>Arredondando o valor para baixo: ${Math.floor(numero)} </p>`;

   text.innerHTML += `<p>Arredondando o valor para cima: ${Math.ceil(numero)} </p>`;

   text.innerHTML += `<p> Com apenas duas casas decimais: ${Number(numero.toFixed(2))} </p>`;
   */

   //ARRAYS BASIC
        //indice        0      1         2          3         4
  // const alunos = ['natan', 'welly', 'felipe', 'fernando', 'bia'];

   //console.log(alunos.length ); // isso serve para ver o tamanho do array

   //forma de adicionar valores no começo e final do ARRAY mas NÃO é dinamico pq teria que saber o tamanho do ARRAY

   //alunos[0] = 'eduardo';
   //alunos[5] = 'luiza';
   //Outra forma de adicionar que também não é mt prática seria
  // alunos[alunos.length] = 'matheus';

  //A MELHOR MANEIRA DE ADICIONAR um valor no array de forma dinamica no final do ARRAY é pela função push :

  //alunos.push('cauan')
  //console.log(alunos);

  //Forma de adicionar um valor no começo do ARRAY

  //alunos.unshift('natalie');

  //console.log(alunos);


  //Removendo ELEMENTO do final do ARRAY

  //const removido = alunos.pop(); // criando uma varievel ajuda a ver qual elemento foi removido
 // console.log(removido);
// console.log(alunos);


/*REMOVENDO o primeiro elemento

const removido = alunos.shift();
console.log(removido);
console.log(alunos); // No caso removendo o elemento 'natan'  */

//delete alunos[1]; // Apaga um elemento mantendo o indice dos outros mas consta como elemento vazio, irá aparecer q o elemento [1] é UNDEFINED
//console.log(alunos[1]);


//Dividindo um ARRAY

/* alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3)); // assim o ARRAY ficará [ 'natan', 'welly', 'felipe' ] 

console.log(alunos.slice(0, -4)); // Usando com número negativo dá no mesmo mas a lógica é o array inteiro mas subtraindo no tamanho

console.log(typeof alunos); // ARRAY é considerado um objeto
*/


// Const com valores mutáveis


/*const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

const nome = 'luiz';
nome = 'joão'; // Erro: Assignment to constant variable.
Porém, existe uma diferença entre variável e valor.

Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.  */


//FUNÇÕES

/*function soma(a = 15, b = 5){  // a variavel result só existe dentro do escopo da função
    const result = a + b; 
    return result;
}

console.log(soma());



//OUTRA FORMA DE FAZER FUNÇÃO

const raiz = (x) =>{  // arrow function
     return  x ** 0.5;
}

const raiz = x => x ** 0.5;  //quando só tem 1 parametro, 1 linha pode tirar o corpo da função, o parenteses e o return que irá funcionar igual



console.log(raiz(225));

//OUTRA FORMA DE FAZER FUNÇÃO

const raiz2 = function (n){
     return n ** 0.5;
}

console.log(raiz2(9))
*/



//OBJETOS(BÁSICO)

const array = [1,2,3]; //msm sendo const pode reatribuir valor dentro do array só NÃO pode reatribuir valor a variavel array


/*const pessoa1 = {   //Objeto literal
     nome: 'Natan',  //nome,idade, sobrenome são ATRIBUTOS
     sobrenome: 'Porto',
     idade: 19
}; */

//console.log(pessoa1.nome)

// Criando uma função que retorna um objeto para criar pessoas

/*const newPeople = (nome, sobrenome,idade)=>{
    return  {
          nome: nome, //quando tem o mesmo valor pode deixar só como nome
          sobrenome: sobrenome,
          idade: idade
     };
    /* return  { nome,sobrenome, idade }; DESSA FORMA     */
//} 

/*const pessoa1 =newPeople('Natan', 'Porto', 19);
const pessoa2 =newPeople('Welly', 'Silva', 18);
const pessoa3 =newPeople('Felipe', 'Irineu', 17);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome); */

//MÉTODOS ( FUNÇÕES DENTRO DE OBJETOS)

const newPerson = {
     nome: 'irineu', 
     sobrenome:'velho broxa',
     idade:79,

     fala(){
         // console.log(`${this.nome} ${this.sobrenome}d está falando oi!`);
         console.log(`A minha idade atual é ${this.idade}`)
     },  //this serve para referenciar um objeto ou atributo

     incrementoIdade(){
          this.idade++;
     }
};

newPerson.fala(); //A minha idade atual é 79
newPerson.incrementoIdade(); // 80
newPerson.fala(); //A minha idade atual é 80









  


  









