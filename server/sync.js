require('dotenv').config();
//require('dotenv').config({ path: require('path').resolve(__dirname, '../../../../.env') });

const sequelize = require('./shared/infrastructure/db/mysql/sequelize.js');

// Importa tus modelos para que Sequelize los instancie, ojo, tenemos vertical slicing, con lo que cada modelo está en su paquete.
require('./user/infrastructure/userModel.js');

// require('../models/Academy');
// require('../models/Voucher');
// require('../models/Redeem');
// require('../models/Schedule');

(async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log('Todas las tablas han sido sincronizadas correctamente con Sequelize.');
    process.exit(0);
  } catch (err) {
    console.error('Error al sincronizar las tablas:', err);
    process.exit(1);
  }
})();


//el ultimo comando si funciono con la linea 2, quierop probarlo con la linea 1