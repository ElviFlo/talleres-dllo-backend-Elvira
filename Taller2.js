// Punto #1
function findMax(lista) {
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

let lista = [3, 17, -1, 4, -19];
console.log("Punto 1:");
console.log("El mayor valor de esta lista = [" + lista + "] es " + findMax(lista));

// Punto #2
function includes(lista, num) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === num) {
            return true;
        }
    }
    return false;
}

let num1 = 2;
let num2 = 4;
console.log("\nPunto 2:");
console.log("¿El número " + num1 + " se encuentra en esta lista = [" + lista + "]? : " + includes(lista, num1));
console.log("¿El número " + num2 + " se encuentra en esta lista = [" + lista + "]? : " + includes(lista, num2));

// Punto #3
function sum(lista) {
    let sum = 0;
    for (let i = 0; i < lista.length; i++) {
        sum += lista[i];
    }
    return sum;
}

console.log("\nPunto 3:");
console.log("La suma de los elementos de esta lista = [" + lista + "] es " + sum(lista));

function missingNumbers(lista) {
    let min = lista[0];
    let max = lista[0];
    let missings = []

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
            min = lista[i];
        }
        if (lista[i] > max) {
            max = lista[i];
        }
    }

    for (let num = min; num <= max; num++) {
        /*
        let encontrado = false;
        for (let j = 0; j < lista.length; j++) {
            if (lista[j] === num) {
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            missings.push(num);
        }
        
        */

        
        let find = includes(lista,num);
        if (!find){
            missings.push(num);
        }         
    }

    return missings;

}

let lista2 = [7,2,4,6,3,9]
console.log("\nPunto 4:");
console.log("Los elementos de esta lista = [" + lista + "] que no están presentes son: [" + missingNumbers(lista2)+"]");