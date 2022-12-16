
lista = ['natan', 'joao', 'silvana', 19, 28];

console.log(lista[2]);

console.log(lista.length) // tamanho da lista é length

console.log(lista.indexOf('silvana')) //indexOf ajuda a procurar um elemento dentro do array, por exemplo mostra q silvana está na posição 2

console.log(lista.indexOf('irineu')) // vai retornar -1, oque quer dizer que esse valor que está sendo procurado NÃO existe

console.log(lista.join(',')) // o join() listou o array dessa forma:  natan,joao,silvana,19,28

console.log(lista.pop()) // lista.pop serve para eliminar o ultimo valor do array/ ele mostra 28 no console pq é o ultimo valor do array
console.log(lista) // aqui mostra a lista sem o ultimo valor graças o pop() / 'natan', 'joao', 'silvana', 19

console.log(lista.shift()) //elimina o primeiro valor do array / no caso seria 'natan', ele ira mostrar natan no console
console.log(lista) // agora aqui mostra a lista sem o primeiro e ultimo valor / 'joao', 'silvana', 19 

lista[0] = 'natan silva' //atribuindo novo valor ao array, no caso 'natan silva'
console.log(lista) // 'natan silva', 'silvana', 19

console.log(lista.push('henrique')) // push() adiciona um valor ao array e ele retorna o numero de valores dentro do array, 4 contando com o henrique
console.log(lista) // 'natan silva', 'silvana', 19, 'henrique' / retorna a lista nova

if (lista.indexOf('henrique') > -1) {
    console.log('o valor está dentro do array') // esse if verifica se o valor 'henrique' que foi procurado pelo indexOf existe dentro array, por isso deve ser maior q -1
}else{
    console.log('nao encontrado na lista')
}