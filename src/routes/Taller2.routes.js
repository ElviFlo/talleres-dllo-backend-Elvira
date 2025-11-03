const express = require('express');
const { findMax, includes, sum, missingNumbers } = require('../../Taller2');

const router = express.Router();

router.post('/findMax', (req, res) => {
  const { numbers } = req.body;
  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((n) => typeof n !== 'number' || Number.isNaN(n))
  ) {
    return res
      .status(400)
      .json({ error: 'numbers debe ser un arreglo numérico no vacío' });
  }

  const max = findMax(numbers);
  return res.json({ numbers, max });
});

router.post('/includes', (req, res) => {
  const { numbers, number } = req.body;

  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((n) => typeof n !== 'number' || Number.isNaN(n))
  ) {
    return res
      .status(400)
      .json({ error: 'numbers debe ser un arreglo numérico no vacío' });
  }
  if (typeof number !== 'number' || Number.isNaN(number)) {
    return res.status(400).json({ error: 'number debe ser un número' });
  }

  const exists = includes(numbers, number); // true | false
  return res.json({ numbers, number, includes: exists });
});

router.post('/sum', (req, res) => {
  const { numbers } = req.body;

  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((n) => typeof n !== 'number' || Number.isNaN(n))
  ) {
    return res
      .status(400)
      .json({ error: 'numbers debe ser un arreglo numérico no vacío' });
  }

  const total = sum(numbers);
  return res.json({ numbers, sum: total });
});

router.post('/missingNumbers', (req, res) => {
  const { numbers } = req.body;

  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((n) => typeof n !== 'number' || Number.isNaN(n))
  ) {
    return res
      .status(400)
      .json({ error: 'numbers debe ser un arreglo numérico no vacío' });
  }

  const faltantes = missingNumbers(numbers);
  return res.json({ numbers, faltantes });
});

module.exports = router;