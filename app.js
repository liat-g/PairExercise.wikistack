var morgan = require('morgan');
var express = require('express');
var layout = require('./views/layout.js'); //need to require layout.js to use the data from it
var app = express();
const indexRouter = express.Router();
const { db, Page, User } = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extender: false }));

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res) => {
  res.send(layout()); //invokes the function and sends it back out to the page
});
const PORT = 3000;

const syncItUp = async () => {
  try {
    await db.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  } catch (error) {
    res.send(error);
  }
};

syncItUp();

module.exports = indexRouter;
