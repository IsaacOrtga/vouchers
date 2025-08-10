// server/scripts/createDatabase.js
const mysql = require('mysql2/promise');
require('dotenv').config();

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`
    );
    console.log(`✅ Database '${process.env.DB_NAME}' creada o ya existente`);
    await connection.end();
  } catch (err) {
    console.error('❌ Error al crear la base de datos:', err);
    process.exit(1);
  }
})();
