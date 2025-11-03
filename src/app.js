const express = require('express');
const cors = require('cors');

const taller1Routes = require('./routes/Taller1.routes');
const taller2Routes = require('./routes/Taller2.routes');
const taller3Routes = require('./routes/Taller3.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/taller1', taller1Routes);
app.use('/api/taller2', taller2Routes);
app.use('/api/taller3', taller3Routes);

// endpoint de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de talleres backend funcionando ✅' });
});

module.exports = app;
