require('dotenv').config();
const sequelize = require('./shared/infrastructure/db/mysql/sequelize');

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);


(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa a la base de datos.');
  } catch (err) {
    console.error('❌ Error al conectar:', err);
  }
})();
