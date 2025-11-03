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
## 📝 Taller 04 – API Backend (Express)
📌 **Objetivo:** Exponer en una **API REST** (Node.js + Express) todas las funciones de los talleres anteriores (1, 2 y 3), cada punto con su **endpoint POST**.  
📁 **Carpetas/archivos clave:**
- `main.js` (punto de entrada)
- `src/app.js` (configuración de Express)
- `src/routes/taller1.routes.js`
- `src/routes/taller2.routes.js`
- `src/routes/taller3.routes.js`

> **Puerto por defecto:** `3005` (puedes cambiarlo con la variable `PORT`).

### ▶️ Instalación (si no lo hiciste antes)
```bash
npm install
```

### ✅ Verificar API
```bash
curl http://localhost:3005
```

Salida esperada:
```json
{"message":"API Funcionando"}
```
## 🔌 Rutas disponibles

### 🧪 Taller 1 — Prefijo: `/api/taller1`
1) **convertidorTemp**  
`POST /api/taller1/convertidorTemp`  
**Body**
```json
{ "celsius": 20 }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller1/convertidorTemp \
  -H "Content-Type: application/json" \
  -d '{"celsius":20}'
```

2) **resolvedor** *(fórmula cuadrática)*  
`POST /api/taller1/resolvedor`  
**Body** (`op` = `"pos"` | `"neg"`)
```json
{ "a": 1, "b": 5, "c": 4, "op": "pos" }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller1/resolvedor \
  -H "Content-Type: application/json" \
  -d '{"a":1,"b":5,"c":4,"op":"pos"}'
```

3) **mejorParidad**  
`POST /api/taller1/mejorParidad`  
**Body**
```json
{ "num": 7 }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller1/mejorParidad \
  -H "Content-Type: application/json" \
  -d '{"num":7}'
```

4) **peorParidad** *(válido 1..10)*  
`POST /api/taller1/peorParidad`  
**Body**
```json
{ "num": 9 }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller1/peorParidad \
  -H "Content-Type: application/json" \
  -d '{"num":9}'
```

---

### 🧪 Taller 2 — Prefijo: `/api/taller2`
1) **findMax**  
`POST /api/taller2/findMax`  
**Body**
```json
{ "numbers": [3, 17, -1, 4, -19] }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller2/findMax \
  -H "Content-Type: application/json" \
  -d '{"numbers":[3,17,-1,4,-19]}'
```

2) **includes**  
`POST /api/taller2/includes`  
**Body**
```json
{ "numbers": [3, 17, -1, 4, -19], "number": 4 }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller2/includes \
  -H "Content-Type: application/json" \
  -d '{"numbers":[3,17,-1,4,-19],"number":4}'
```

3) **sum**  
`POST /api/taller2/sum`  
**Body**
```json
{ "numbers": [3, 17, -1, 4, -19] }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller2/sum \
  -H "Content-Type: application/json" \
  -d '{"numbers":[3,17,-1,4,-19]}'
```

4) **missingNumbers**  
`POST /api/taller2/missingNumbers`  
**Body**
```json
{ "numbers": [7, 2, 4, 6, 3, 9] }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller2/missingNumbers \
  -H "Content-Type: application/json" \
  -d '{"numbers":[7,2,4,6,3,9]}'
```

---

### 🧪 Taller 3 — Prefijo: `/api/taller3`
1) **desglosarString**  
`POST /api/taller3/desglosarString`  
**Body**
```json
{ "texto": "murcielagos", "tipo": "vocales" }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller3/desglosarString \
  -H "Content-Type: application/json" \
  -d '{"texto":"murcielagos","tipo":"vocales"}'
```

2) **twoSum**  
`POST /api/taller3/twoSum`  
**Body**
```json
{ "numbers": [2, 7, 11, 15], "target": 9 }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller3/twoSum \
  -H "Content-Type: application/json" \
  -d '{"numbers":[2,7,11,15],"target":9}'
```

3) **conversionRomana**  
`POST /api/taller3/conversionRomana`  
**Body**
```json
{ "romano": "MCMXCVII" }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller3/conversionRomana \
  -H "Content-Type: application/json" \
  -d '{"romano":"MCMXCVII"}'
```

4) **descomposicion**  
`POST /api/taller3/descomposicion`  
**Body**
```json
{ "cadena": "malhumor,al,hum,humor,m,mal,malhu" }
```
**Curl**
```bash
curl -X POST http://localhost:3005/api/taller3/descomposicion \
  -H "Content-Type: application/json" \
  -d '{"cadena":"malhumor,al,hum,humor,m,mal,malhu"}'
```
---

## 🧷 Notas
- Arrays deben ser **numéricos** (sin strings).
- `peorParidad` acepta números entre **1 y 10**.
