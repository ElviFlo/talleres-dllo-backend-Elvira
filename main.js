// server.js
const app = require('./src/app');

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});