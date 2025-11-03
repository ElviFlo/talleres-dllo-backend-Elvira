// Punto #1
function desglosarString(palabra, tipo) {
    palabra = palabra.toLowerCase();
    const vocales = "aeiou";
    let c = 0;

    for (let char of palabra) {
        if (vocales.includes(char)) {
            if (tipo === "vocales") {
                c++;
            }
        } else {
            if (tipo === "consonantes") {
                c++;
            }
        }
    }

    return c;
}

let str = "murcielagos";
let tip1 = "vocales";
let tip2 = "consonantes";

console.log("Punto 1:");
console.log("La palabra " + str + " tiene " + desglosarString(str, tip1) + " " + tip1 + " y " + desglosarString(str, tip2) + " " + tip2);

// Punto 2
function twoSum(lista, num) {
    let idx = [];

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] + lista[j] == num) {
                idx.push(i);
                idx.push(j);
                return idx;
            }
        }
    }
}

let lst1 = [2, 7, 11, 15];
let n1 = 9;
let lst2 = [3, 4, 2];
let n2 = 6;

console.log("\nPunto 2:");
console.log("Los indices de los numeros del arreglo = [" + lst1 + "] que sumados sean = " + n1 + " son [" + twoSum(lst1, n1) + "]");
console.log("Los indices de los numeros del arreglo = [" + lst2 + "] que sumados sean = " + n2 + " son [" + twoSum(lst2, n2) + "]");

// Punto 3
function conversionRomana(numro) {
    let act;
    let sig;
    let num = 0;
    const vals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for (let i = 0; i < numro.length; i++) {
        act = vals[numro[i]];
        sig = vals[numro[i + 1]];

        if (sig && act < sig) {
            num -= act;
        } else {
            num += act;
        }
    }
    return num;
}

let nr1 = "III";
let nr2 = "XIV";
let nr3 = "MMXXIV";
let nr4 = "MCMXCVII";

console.log("\nPunto 3:");
console.log("El número " + nr1 + " es equivalente a " + conversionRomana(nr1));
console.log("El número " + nr2 + " es equivalente a " + conversionRomana(nr2));
console.log("El número " + nr3 + " es equivalente a " + conversionRomana(nr3));
console.log("El número " + nr4 + " es equivalente a " + conversionRomana(nr4));

// Punto 4
function descomposicion(cadena) {
  let pts = cadena.split(",");
  let obj = pts[0];
  let dic= pts.slice(1);

  for (let i = 0; i < dic.length; i++) {
    for (let j = 0; j < dic.length; j++) {
      if (i !== j) {
        if (dic[i] + dic[j] == obj) {
          return [dic[i], dic[j]];
        }
      }
    }
  }
  return null;
}

let cdn = "malhumor,al,hum,humor,m,mal,malhu";
console.log("\nPunto 3:");
console.log("En la cadena \""+ cdn + "\" las dos palabras que componen la palabra a descomponer son:");
console.log(descomposicion(cdn));

module.exports = {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion,
};