//LOOPS

x = 0;

while (x <= 10) {   //while significa ENQUANTO, enquanto a condição for true acontece tal coisa
   document.write(`<br> O valor de X é ${x}`);
    x++;   //mesma coisa de x = x + 1
}
x = 1000;
document.write(`<br><br><br> O valor de X agora é ${x}<br>`)

//for = para/ estrutura de repetição com 3 condições

for (let a = 0; a <= x; a++) {
    document.write(`<br>o valor do A é ${a}`);
    
} 

//Switch NÃO é um lço de repetição, o caso condicional sempre começa em 0


document.write('<br> Escolha seu pedido: <br>')
document.write('<br> 0 - Sorvete / 1 - Suco <br>')
document.write('<br> 2 - Coca Cola / 3 - Água Gelada <br><br>')

function pedir(){
    let x = prompt('O que deseja pedir?');


    switch (x) {
        case '0':
            alert('O pedido foi um Sorvete');
            break;
        case '1':
            alert('O pedido foi um Suco');
            break
        case '2':
            alert('O pedido foi uma Coca Cola');
            break
            case '3':
                alert('O pedido foi uma Água gelada');
                break
    
        default:
            alert('Pedido não encontrado no menu, tente novamente')
            break;
    }
} 

function acao(){
    document.write('<br>Executando...')
}

var timer = setInterval(acao, 1000); //Executa de tempos em tempos
clearInterval(timer);
//adicionando numa variavel e depois chamando o clearInterval com parametro da variavel, o setInterval para a execução

setTimeout(acao, 3000); //executa depois de tempo de execução


//WebStorage

localStorage.setItem('nome', 'Natan' ); //CADASTRA dados / key - value
                //OU
localStorage.nome = 'Luis'; // é a mesma coisa do setItem só q mais pratico 

localStorage.getItem('nome'); //Puxa DADOS , um item para uso

localStorage.removeItem('nome') //Remove o nome / 'nome' é a chave


let nome = '';

if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt('Digite seu nome?')
}

 nome = localStorage.nome;

 document.getElementById('nome').innerHTML = nome;

  
//SessionStorage tem a mesma sintaxe, mas os dados somem quando sai do navegador

//sessionStorage.setItem e por ai vai


//Uso de desconstrução em Objetos e arrays

const pessoa ={
    nome: 'natan',
    sobrenome: 'Silva',
    idade: 19,
    cargo: 'desenvolvedor'
};

let { nome } = pessoa;       //Desconstruindo um objeto, pegando do obj pessoa, o elemento nome e definindo a uma variavel nome com o valor q tinha no obj pessoa 
console.log(nome)

let { sobrenome } = pessoa;
console.log(sobrenome)

let {idade, cargo} = pessoa;
console.log(idade, cargo)

let {cargo: programador} = pessoa; //se quer q cargo nao seja o nome dessa variavel
console.log(programador)          // mostra 'desenvolvedor'


//DESCONSTRUINDO ARRAYS

let nomes = ['lucas', 'joao', 21];

let { 1:segundonome } = nomes;  //puxando por posição, 1 é a posição de joao : nome da variavel, no caso segundonome = nome do array, no caso nomes
console.log(segundonome)

let { 0:Primeironome, 2: idade } = nomes; 
console.log(Primeironome, idade) 

// 2 forma de DESCONSTRUIR

let nomes = ['lucas', 'joao', 21];

let [nome, segundonome, idade] = nomes; // Nao precisa atribuir todos de uma vez

console.log(nome,idade) 

//SPREAD OPERATOR !!

let primeiros = [1,2,3];

let numeros = [4,5,6];

//Usar o spread operator para puxar o array "primeiros" para o "numeros"
//O Spread Operator ...  junta as informações e deixa mais pratico na hr de utilizar

let numeros = [...primeiros,4,5,6]   // puxando os primeiros e juntando com o resto

console.log(numeros) // Mostra [ 1, 2, 3, 4, 5, 6 ]

//Exemplo de Spread Operator utilizando objeto
//Muito utilizado quando quer reutilizar seus dados em uma operação ou até mesmo quando quer adicioanr dados


let pessoa = {
    nome:'natan',
    idade: 19,
    cargo: 'desenvolvedor'
};

let novaPessoa = {
    ...pessoa,
    hobbie: 'jogar',
    cidade: 'Barra Velha'

};

console.log(novaPessoa)  vai mostrar desde 'natan' até 'barra velha'

//SPREAD OPERATOR COM FUNÇÕES

function cadastroPessoa (info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1
    }
    return novosDados;
}

console.log(cadastroPessoa({
    nome: 'natan',
    sobrenome: 'Silva',
    ano: 2022
}));


//REST OPERATOR
//Não sabe quantos nomes vao passar, pra ela poder receber e tratar X itens nessa função, pra isso serve o Rest Operator. Funciona com números também

function listaNomes(...nomes){
    console.log(nomes);
}

listaNomes('natan', 'lucas', 'joao'); 

//REST OPERATOR EM função

function cadastrar(usuarios, ...novosUsuarios){ //rest operator aqui para juntar
    let totalUsuarios = [     //codigo para receber e mostrar os usuarios e os novosUsuarios. Usando o Spread Operator tambem!
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios); 


}

let usuarios = ['natan', 'joao'];
let novosUsuarios = cadastrar(usuarios,'silvana','felipe');


//OPERAÇÃO EM ARRAY
//Forma mais prática de percorrer listas de uma forma menos verbosa, ex:

const lista = [1,2,3,4,5,6];

//função map() serve para percorrer todos os itens da lista e retornar algo

const novaLista = lista.map(function(item,index){ //item é cada um da lista / index é a posição que está passando
    return item + index;
});      
console.log(novaLista) // dessa forma ele vai pegar o item, por exemplo, o 1 e vai somar com a posição 0 e assim em diante

//Reduce : consegue somar todos os itens da lista

const soma = lista.reduce(function(total, proximo){
    return total + proximo; //pega o começo do total que é 0 e soma com o próximo que é 1, o total vira 1 e assim em diante
});
//0
console.log(soma);

//FIND : usa para achar algum item dentro do array, caso não tenha ele mostrará undefined no array

const find = lista.find(function(item){
    return item == 10
})
console.log(find)  

//FUNÇÕES ANONIMAS: são funções que não dependem de nomes, somente são declaradas e armazenadas em uma variável.

function adicionar(...numeros){ //usando REST
    let total = numeros.reduce(function(total, proximo){ //função anonima dentro do reduce
        return total + proximo;
    })
    console.log(total)
}

adicionar(1,2,3,4,5) 

//Outra forma de reduzir ainda mais é usando arrow function


function adicionar(...numeros){ 
    let total = numeros.reduce((total, proximo) =>{  
        let soma = total + proximo;
        return soma;
    })
    console.log(total)
}

adicionar(1,2,3,4,5)  


/*Métodos: INCLUDES(): verifica seja uma string, array, array de obj, se td q foi digitado dentro desse include possui no que está mandando. 
    Ex: usar include para ver se tem 'lucas' no array. Em outra situação caso nao seja usado o include, teria que usar um For ou laço de repetição para percorrer todo array, oq seria menos prático*/

                let nomes = ['felipe', 'lucas', 'natan'];

                console.log(nomes.includes('lucas'))      //retorna um true ou falso caso tenha ou não no array

                if (nomes.includes('matheus')) {         //Pra verificar
                    console.log('matheus está na lista')
                }else{
                    console.log('matheus não está na lista')
                }

    //endsWith: Verifica se um nome ou string termina com oque está passando

                    let nome = 'matheus';
                    console.log(nome.endsWith('s'))     //retorna true pq a string termina com a letra S


    //startsWith: A mesma lógica de endsWith só que verifica se começa com determinada letra, frase.

                    console.log(nome.startsWith('math'))  //retorna true pq começa com math

                // ! tomar cuidado com strings em minusculo ou maiusculo, ainda é CASE SENSITIVE

    //Métodos SOME e EVERY , facilitam o trabalho de comparações e verificações  com arrays e arrays de objeto

    //SOME: verifica se tem algum - pelo menos 1

            let nomes = ['natan', 'lucas', 'matheus']

            nomes.some(nomes => nomes === 'natan'); // sintaxe de função anonima - recebe callback
    //devolve um boolean

    //EVERY : devolve callback tbm mas tem todos os valores do array tem que passar na condição, diferente do some
                
                let nomes =[                  //Arrays de objeto
                    {nome: 'natan', idade:17},
                    {nome: 'luis', idade:30},
                    {nome:'maria', idade: 20}
                ];

    nomes.every(nome => nome.idade >= 18);
    //Verifica se TODOS são maior de 18 anos, ou seja EVERY. No exemplo, o 'natan' é de menor, logo retorna FALSE - EVERY também retorna boolean


                //Exemplo utilizando o condicional IF

    if ( nomes.every(nome => nome.idade >= 18)) {
        console.log('Todos são maiores de 18 anos')
    }else{
        console.log('ALGUÉM É DE MENOR')
    }

    // TryCatch: basicamente diz pro javascript tentar executar um bloco de código e caso de errado, executa oque está dentro do CATCH.

    try {  // SINTAXE
        
    } catch (error) {
        
    }

    /*THIS: Em muitos casos, o valor this é determinado pela forma como a função é chamada. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada. Ele também possui algumas diferenças entre o modo estrito e o modo não estrito. */

    /*Contexto GLOBAL: 
        -No contexto de execução global (fora de qualquer função), "this" refere-se ao objeto global, seja em modo estrito ou não. */
                console.log(this.document === document); // true

        // Em navegadores web, o objeto window é também o objeto global:
                console.log(this === window); // true
                this.a = 37;
                console.log(window.a); // 37


    /* Contexto de FUNÇÃO: 
        - Dentro de uma função, o valor de this depende de como a função é chamada. */











