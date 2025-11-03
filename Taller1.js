// Punto #1
function convertidorTemp(cls) {
    let temp_far = cls * (9 / 5) + 32
    return temp_far
}
let cls = -40
console.log("Punto 1:")
console.log(cls + " a grados Fahrenheit es igual a = " + convertidorTemp(cls))

// Punto #2
function resolvedor(a, b, c, op) {
    let dis = Math.sqrt(b ** 2 - 4 * a * c)
    let den = 2 * a
    let x

    if (op == "neg") {
        x = (-b - dis) / den
    } else {
        x = (-b + dis) / den
    }

    return x

}

console.log("\nPunto 2:")
console.log("Resultado Negativo: " + resolvedor(1, 5, 4, "neg"))
console.log("Resultado Positivo: " + resolvedor(1, 5, 4, "pos"))


// Punto #3

console.log("\nPunto 3:")
function mejorParidad(num) {
    let res
    res = num %= 2
    return res
}

let num1 = 4
p1 = mejorParidad(num1)
if (p1 == 0) {
    console.log("El número " + num1 + " Es par")
} else {
    console.log("El número " + num1 + " Es impar")

}

// Punto #4
console.log("\nPunto 4:")
function peorParidad(num) {
    for (let i = 1; i <= 10; i++) {
        if (i === num) {
            if (i === 1) {
                return "Impar";
            } else if (i === 2) {
                return "Par";
            } else if (i === 3) {
                return "Impar";
            } else if (i === 4) {
                return "Par";
            } else if (i === 5) {
                return "Impar";
            } else if (i === 6) {
                return "Par";
            } else if (i === 7) {
                return "Impar";
            } else if (i === 8) {
                return "Par";
            } else if (i === 9) {
                return "Impar";
            } else if (i === 10) {
                return "Par";
            }
        }
    }

}

let num2 = 9

console.log("El número " + num2+ " es " + peorParidad(num2))

module.exports = {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad,
};
