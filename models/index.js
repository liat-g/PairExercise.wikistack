const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
const validator = require('validator');

//create two models

//create page model with db.define
const Page = db.define('page', {
  //have columns: title, slug, content, status
  title: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false, unique: true },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM('open', 'closed') },
});

//user model
const User = db.define('user', {
  //columns: name, email
  name: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    //check if validate works. If not, change to validator
    validate: {
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
