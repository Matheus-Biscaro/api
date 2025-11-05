// exports.soma = (a, b) => {
//     return a + b;
// }
// exports.sub = (a, b) => {
//     return a - b;
// }
// exports.div = (a, b) => {
//     return a / b;
// }
// exports.mult = (a, b) => {
//     return a * b;
// }

// exports.verificaNumero = (numero) => {
//     if (numero > 0) {
//         return 'positivo';
//     } else if (numero < 0) {
//         return 'negativo';
//     } else {
//         return 'zero';
//     }
// }

// exports.ehString = (valor) => {
//     return typeof valor ==='string';
// }
// exports.numerosPares = (n) => {
//     const pares = [];
//     for (let i = 2; i <= n; i += 2) {
//         pares.push(i);
//     }
//     return pares;
// }


// //toBeTruthy = Combina com qualquer coisa que uma instruição if trata como verdadeiro
// exports.validarString = (texto) => {
//     return texto.length >= 3;
// }

// //toBeFalsy = combina com qaulquer coisa que uma instrução if trata como falso 
// exports.validarNumero = (numero) => {
//     return numero < 10;
// }

// //toBeUndefined
// exports.obterPropriedade = (objeto, propriedade) => {
//     return objeto[propriedade];
// }
// //toBeDefined = ao Contrario de Undefined
// exports.criarUsuario = (nome, idade) => {
//     if (!nome || !idade) {
//         return undefined;

//     }
//     return {nome,idade};
// }

// //toBeNull = Corresponde apenas nulo 
// const produtos = [
//     { id: 1, nome: 'Celular' , preco: 999.99},
//     { id: 2, nome: 'Laptop'  , preco: 1499.99},
// ];
// exports.pesquisarProduto = (nome) =>{
//     for (let i = 0; i < produtos.length; i++) {
//         if (produtos[i].nome === nome) {
//             return produtos[i];
//         }
//     }
//     return null;
// }

// //toBeGreaterThan = Compara se o valor e maior que o esperado
// exports.dobrarNumero = (numero) =>{
//     return numero*2;
// }

// //toBeGreaterThanorEqual = Verifica se o valor e maior ou igual ao original
// //toBeLessThanOrEqual = Verifica se o valor e menor ou igual ao original
// exports.aumentarSalario=(salario, aumentoPorcentagem) => {
//     const aumento = salario * (aumentoPorcentagem / 100);
//     return salario + aumento;
// }

// //toMatch = Verifica strings
// exports.formatarEmail = (usuario,dominio) => {
//     return `${usuario}@${dominio}`
// }

// //toContain = Verifica se o vetor ou objeto contém um valor 
// exports.contemElemento = (lista,elemento) => {
//     return [lista,elemento];
// }


exports.mesclarObjetos = (A, B) => {
    return C = [...A, ...B]
};

exports.ehPrimo = (numero) => {
    if (numero < 2) {
        return false
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        };
    }
    return true;
};

exports.div = (a, b) => {
    if (b == 0) {
        return ('Erro')
    } else {
        return a / b;
    }
};