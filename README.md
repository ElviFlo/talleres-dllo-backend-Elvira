# 📚 Talleres de Desarrollo Web Backend

Este repositorio contiene los **talleres prácticos** de la asignatura Desarrollo Web Backend (2025).  
Cada taller corresponde a un archivo independiente (`taller-01.js`, `taller-02.js`) y se ejecuta con **Node.js** desde la terminal.  

## 🚀 Requisitos previos

- Tener instalado **Node.js**  
  Verifica la instalación con:
  ```bash
  node -v

---
## 📝 Taller 01 – Desarrollo Web Backend

📌 **Archivo:** `Taller1.js`  
📅 **Fecha:** 2025-08  

### 🔹 Puntos del taller

#### 1. convertidorTemp  
- Recibe una temperatura en grados centígrados y retorna su valor en Fahrenheit.  
- **Fórmula:**  $F = C \times \frac{9}{5} + 32$

#### 2. resolvedor  
- Calcula el valor de la **fórmula general cuadrática**.  
- Permite elegir si se desea el resultado positivo o negativo.  **Ejemplo:**  
  - {a=1, b=5, c=4} → -1
  - {a=1, b=5, c=4} → -4

#### 3. mejorParidad
- Determina si un número es par, implementado de la manera más eficiente.

#### 4. peorParidad
- Determina si un número es par, de la peor forma posible.
- Solo se requiere “resolver” hasta el número 10.

### ▶️ Cómo correr
```bash
node taller-01.js
```
---
## 📝 Taller 02 – Desarrollo Web Backend

📌 **Archivo:** `Taller2.js`  
📅 **Fecha:** 2025-08  
⚠️ Restricciones: No se permite usar funciones como:
- `Math.max`
- `Math.min`
- `some`
- `every`
- `includes`
- `sort`
- `reduce`
- `find`
- `findIndex`
- `filter`

### 🔹 Puntos del taller

#### 1. findMax
- Recibe una lista de números y retorna el mayor valor.
**Ejemplo:**

  - Entrada: `[3, 17, -1, 4, -19]`  
  - Salida: `17`

#### 2. includes
- Recibe una lista de números y un número adicional.  
- Retorna `true` si el número está en la lista, `false` de lo contrario.  **Ejemplo:**  
  - Entrada: `[3, 17, -1, 4, -19], 2` → `false`
  - Entrada: `[3, 17, -1, 4, -19], 4` → `true`

#### 3. sum
- Recibe una lista de números y retorna la suma de sus elementos. **Ejemplo:**
  - Entrada: `[3, 17, -1, 4, -19]`  
  - Salida: `4`

#### 4. missingNumbers
- Recibe una lista de números y retorna los faltantes entre el menor y mayor de la lista.. **Ejemplo:**
  - Entrada: `[7, 2, 4, 6, 3, 9]`  
  - Salida: `[5,8]`

### ▶️ Cómo correr
```bash
node Taller2.js
```
---
## 📝 Taller 03 – Desarrollo Web Backend

📌 **Archivo:** `Taller3.js`  
📅 **Fecha:** 2025-09  

### 🔹 Puntos del taller

#### 1. desglosarString
- Recibe una string y la string "vocales" o "consonantes".
- Retorne la cantidad de vocales o consonantes que contiene.  **Ejemplo:**  
  - Entrada: "murcielagos", "vocales" → 5
  - Entrada: "murcielagos", "consonantes" → 6

#### 2. twoSum
- Recibe una lista de enteros y un número entero.
- Retorne los índices de los dos números cuya suma sea igual al número dado.
- ⚠️ No se permite usar el mismo número dos veces.  **Ejemplo:**
    - Entrada: [2, 7, 11, 1,5], 9 → [0, 1]
    - Entrada: [3, 4, 2] , 6 → [1,2] 

#### 3. conversionRomana
- Recibe una string con un número romano.
- Retorne su equivalente en cifras arábigas.  **Ejemplo:**
  - Entrada: "III" → 3
  - Entrada: "XIV" → 14
  - Entrada: "MMXXIV" → 2024
  - Entrada: "MCMXCVII" → 1997

#### 4. descomposicion
- Recibe una string de palabras separadas por comas.
- La primera palabra es la palabra a descomponer, el resto forman el diccionario.
- Retorne las dos palabras del diccionario que componen la palabra a descomponer.  **Ejemplo:**
  - Entrada: "malhumor,al,hum,humor,m,mal,malhu" → ["mal", "humor"]

### ▶️ Cómo correr
```bash
node Taller3.js
```
---
