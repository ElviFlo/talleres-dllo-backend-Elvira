const express = require('express');

const {  convertidorTemp,  resolvedor,  mejorParidad,  peorParidad,} = require('../../Taller1');

const router = express.Router();

router.post('/convertidorTemp', (req, res) => {
  const { celsius } = req.body;
  if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
    return res.status(400).json({ error: 'celsius debe ser un número' });
  }
  const fahrenheit = convertidorTemp(celsius);
  return res.json({ celsius, fahrenheit });
});

router.post('/resolvedor', (req, res) => {
  const { a, b, c, op } = req.body;

  const nums = [a, b, c];
  if (nums.some((v) => typeof v !== 'number' || Number.isNaN(v))) {
    return res.status(400).json({ error: 'a, b y c deben ser números' });
  }
  if (op !== 'pos' && op !== 'neg') {
    return res.status(400).json({ error: 'op debe ser "pos" o "neg"' });
  }

  const resultado = resolvedor(a, b, c, op);
  return res.json({ a, b, c, op, resultado });
});

router.post('/mejorParidad', (req, res) => {
  const { num } = req.body;
  if (typeof num !== 'number' || Number.isNaN(num)) {
    return res.status(400).json({ error: 'num debe ser un número' });
  }
  const r = mejorParidad(num);
  return res.json({
    num,
    valor: r,
    esPar: r === 0,
    descripcion: r === 0 ? 'Par' : 'Impar',
  });
});

router.post('/peorParidad', (req, res) => {
  const { num } = req.body;
  if (typeof num !== 'number' || Number.isNaN(num)) {
    return res.status(400).json({ error: 'num debe ser un número' });
  }
  if (num < 1 || num > 10) {
    return res
      .status(400)
      .json({ error: 'num debe estar entre 1 y 10 (requisito del punto)' });
  }

  const resultado = peorParidad(num); 
  if (resultado !== 'Par' && resultado !== 'Impar') {
    return res.status(500).json({ error: 'No se pudo determinar la paridad' });
  }

  return res.json({
    num,
    resultado,
    esPar: resultado === 'Par',
    valor: resultado === 'Par' ? 0 : 1,
  });
});

module.exports = router;