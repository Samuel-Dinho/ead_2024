/*
1. Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e
adicione nele três frutas diferentes. Depois, tente adicionar uma fruta
que já está no Set.
*/
let meuset = new Set();
meuset.add(1);
meuset.add(2);
meuset.add(3);
meuset.add(3);



/*
2. Verificar Valores no Set: Use o método has para verificar se uma fruta
específica está no seu Set frutas.
*/
meuset.has(1);
/*
3. Remover Valores do Set: Use o método delete para remover uma fruta
do seu Set frutas.
*/
meuset.remove(3);

/*
4. Limpar o Set: Use o método clear para limpar todo o seu Set frutas.
*/
meuset.clear();
/*
5. Tamanho do Set: Crie um Set com vários valores e use a propriedade
size para imprimir o número de elementos no Set.
*/
meuset.add(0);
meuset.add(1);
meuset.add(2);
meuset.add(3);
meuset.add(4);
meuset.add(5);
meuset.size();
/*
6. Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set
e imprimir cada valor.
*/
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}



/*
7. Criar um Set a Partir de um Array: Crie um array com alguns valores
duplicados. Em seguida, crie um Set a partir desse array para remover
as duplicatas.
*/

const arrayComDuplicatas = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8];

const setSemDuplicatas = new Set(arrayComDuplicatas);


const arraySemDuplicatas = [...setSemDuplicatas];


console.log('Array com duplicatas:', arrayComDuplicatas);
console.log('Set (sem duplicatas):', setSemDuplicatas);
console.log('Array sem duplicatas:', arraySemDuplicatas);
