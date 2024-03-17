
let mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
  .once('open', () => {
    console.log('Connected with live DB');
  })
  .on('error', (error) => {
    console.log('mongoConnection Error: ' + error);
  });
module.exports = mongoose;
