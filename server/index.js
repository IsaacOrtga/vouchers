// server/index.js
const express = require('express');
const sequelize = require('./shared/infrastructure/db/mysql/sequelize');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (_, res) => res.send('¡Servidor funcionando! 🚀'));

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos');

    await sequelize.sync({ alter: true });
    console.log('📦 Tablas sincronizadas correctamente');

    app.listen(PORT, () =>
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('❌ Error al iniciar el servidor:', err);
    process.exit(1);
  }
}

start();
