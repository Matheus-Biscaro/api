
const { default: test } = require('node:test');
const teste = require('../src/arquivoTeste');

// test('descrição do teste', () => {                            //Escreve oque voce esta testando
//     expect();                                                // Oque voce espera dessa execução (Oque vai ser feito)
// });

// // expect = Verificação
// // toBe = É Igual
// test('soma de 5 + 2 é igual a 7', () => {
//     expect(teste.soma(5, 2)).toBe(7);
// });

// test('A Divisão de 10 / 2 é igual a 5', () => {
//     expect(teste.div(10, 2)).toBe(5);
// });

// test('A Divisão de 10 / 2 é igual a 5', () => {
//     expect(teste.div(10, 3)).toBeCloseTo(3.33,2);               // Calculos matematicos que nao sao exatos
// });

// test('A Multiplicação de 10 * 2 é igual a 20', () => {
//     expect(teste.mult(10 ,2)). toBe(20);
// });
 
// test('A Subtração de  10 - 2 é igual a 8', () => {
//     expect(teste.sub(10 , 2)).toBe(8);
// });

// test('Verifica se 5 é positivo', () => {
//     expect(teste.verificaNumero(5)).toBe('positivo');
// });

// test('Verifica se -3 é negativo', () => {
//     expect(teste.verificaNumero(-3)).toBe('negativo');
// });

// test('Verifica se 0 é zero', () => {
//     expect(teste.verificaNumero(0)).toBe('zero');
// });

// test('Verifica se "Hello" é uma string', () => {
//     expect(teste.ehString('hello')).toBe(true);
// });

// test('Verifica se 42 não é uma string', () => {
//     expect(teste.ehString(42)).toBe(false);
// });

// test('Retorna lista de numero pares até 6', () => {
//     expect(teste.numerosPares(6)).toEqual([2,4,6]);               // Para usar em vetores ou em objetos que tem posições dentro
// });

// test('Verifica se a função retorna true ao validar string com pelo menos 3 caracteres', () => {
//     expect(teste.validarString('abc')).toBeTruthy();                                                    // Verifica se é verdade
// });

// test('Verifica se a função retorna false ao validar número maior ou igual a 10', () => {
//     expect(teste.validarNumero(15)).toBeFalsy();                                                        // Verifica se é falso
// });

// test('verifica se a função retorna undefined ao obter propriedade inexistente', () => {
//     const objeto = {nome : 'Sandro' , idade : 24};
//     expect(teste.obterPropriedade(objeto, 'email')).toBeUndefined();
// });

// test('Verifica se a funçao retorna um objeto definido ao criar usuário válido', () => {
//     expect(teste.criarUsuario('Sandro', 29)).toBeDefined();
// });

// test('verifica se a função retorna null ao pesquisar produto inexistente', function() {
//     expect(teste.pesquisarProduto('SmartWatch')).toBeNull();
// });

// test('Verifica se a função retorna um número maior ao dobrar', () => {
//     expect(teste.dobrarNumero(5)).toBeGreaterThan(5);
// });

// test('Verifica se a função retorna um número menor que o dobro', () => {
//     expect(teste.dobrarNumero(5)).toBeLessThan(20);
// });

// test('Verifica se a função retorna um salário maior ou igual após o aumento', () => {
//     expect(teste.aumentarSalario(1000,10)).toBeGreaterThanOrEqual(1100);
// });

// test('Verifica se a função retorna um salário menor ou igual após o aumento', () => {
//     expect(teste.aumentarSalario(1000, 10)).toBeLessThanOrEqual(1100);
// });

// test('Verifica se a função retorna um endereço de e-mail formatado corretamente', () =>{
//     expect(teste.formatarEmail('sandro', 'senac.br')).toMatch('sandro@senac.br');
// });

// test('verifica se a função retorna true ao verificar a presença de um elemento na lista', () => {
//     const lista = ['maça' , 'banana' , 'laranja'];
//     const elemento = 'banana';
//     const listaModificada = teste.contemElemento(lista,elemento)
//     expect(listaModificada).toContain(elemento);
// });



// // Exercício 01 
// // 

test('Veja se a fusão ocorre', () => {
    const A = [1,2]
    const B = [5,6]
    expect(teste.mesclarObjetos(A ,B)).toEqual([1,2 , 5,6]);
});

test('Verifica se a função identifica corretamente números primos', () => {
    expect(teste.ehPrimo(67)).toBeTruthy();
    expect(teste.ehPrimo(65)).toBefasly();
})

test('A Divisão de 10 / 2 é igual a 5', () => {
    expect(teste.div(10, 2)).toBe(5);
});

test('A Divisão de 10 / 0 é igual a 0', () => {
    expect(teste.div(10, 0)).toBe(0);
});