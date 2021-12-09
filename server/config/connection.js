const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://mongodbatlas:mongodb@getfit-fitness-tracker.wupok.mongodb.net/userdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;