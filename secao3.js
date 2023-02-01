
/*
        Operadores de comparação

        > maior que
        < menor que 
        >= maior ou igual que
        <= menor ou igual que
        == igualdade  (valor)
        === igualdade estrita  (valor e tipo) //mais recomendado
        != diferente  (valor)
        !== diferente estrito  (valor e tipo) //mais recomendado

        **  retornam valores boolean - true or false
*/

const num1 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp); // retorna true mesmo sendo uma string e um number, pq o == só compara o valor e nao o tipo


const num3 = 10;
const num4 = '10';
const comp1 = num1 === num2;  //retorna façse pq são valores iguais mas TIPOS diferentes
console.log(comp1);

const num5 = 10;
const num6 = 10;
const comp2 = num5 != num6; // retorna false pq os valores não sao diferentes
console.log(comp2);

const num9 = 10;
const num10 = '10';
const comp4 = num9 != num10; // retorna false pq nao chega o tipo e sim o valor, entao o JS entende como valores iguais
console.log(comp4);

const num7 = 10;
const num8 = '10';
const comp3 = num7 !== num8; // retorna true pq são diferentes no tipo e no valor
console.log(comp3);


/* 
    Operadores Lógicos

    && - AND - E - Todas as expressões precisam ser verdadeiras para retornar true, se uma for falsa e as outras verdadeiras, a expressao será false


    || - OR - OU - Só precisa de uma expressao que seja verdadeira para retornar true, só retorna false se todas forem falsas


    ! - NOT - NÃO - Nega / Inverte uma expressão

*/

const expressaoAND = true && true && false;
const expressaoOR = true || false;

console.log(expressaoOR);

console.log(!true); // retorna false pq está negando o true e inverte
console.log(!!true); // não é muito comum mas negaria uma segunda vez, no caso retorna true 


/*
    && -> false && true -> false  "valor"
    ||  -> 

*/
