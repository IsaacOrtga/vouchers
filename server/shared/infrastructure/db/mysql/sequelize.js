const mysql = require('mysql2/promise');

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'toor',
      port: 3306,
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`nombre_de_tu_base_de_datos\`;`);
    console.log(`Database 'nombre_de_tu_base_de_datos' created or already exists.`);
    await connection.end();
  } catch (err) {
    console.error('❌ Error al crear la base de datos:', err);
    process.exit(1);
  }
})();
