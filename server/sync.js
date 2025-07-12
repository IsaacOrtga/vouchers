// Importa tus modelos para que Sequelize los instancie, ojo, tenemos vertical slicing, con lo que cada modelo está en su paquete.
require('./user/infrastructure/userModel.js');
const sequelize = require('./server/shared/infrastructure/db/mysql/sequelize');

// Importar modelos
// require('../models/Academy');
// require('../models/Voucher');
// require('../models/Redeem');
// require('../models/Schedule');


sequelize.sync({ alter: true }) // o { force: true } si estás en desarrollo
  .then(() => {
    console.log('📦 Tablas sincronizadas correctamente.');
  })
  .catch((err) => {
    console.error('❌ Error al sincronizar tablas:', err);
  });
