const fs = require('fs');
require('dotenv').config();

const Aring = new RegExp(`${String.fromCharCode(65533)
}\\${String.fromCharCode(46)}{1,3}`, 'g');
const Auml = new RegExp(`${String.fromCharCode(65533)
  + String.fromCharCode(44)}{1,3}`, 'g');
const Ouml = new RegExp(`${String.fromCharCode(65533)
  + String.fromCharCode(45)}{1,3}`, 'g');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, _Sequelize) {
    const queries = fs.readFileSync(process.env.DB_PATH).toString().split(/;\n/);
    // eslint-disable-next-line no-restricted-syntax
    for (const i in queries) {
      if (queries[i].trim().length === 0 || queries[i].match(/\/\*!40101 .+ \*\//)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      // eslint-disable-next-line camelcase
      const clean_query = queries[i]
        .replace(Aring, 'Å')
        .replace(Ouml, 'Ö')
        .replace(Auml, 'Ä');

      // eslint-disable-next-line no-await-in-loop
      await queryInterface.sequelize.query(clean_query);
    }
  },
};
