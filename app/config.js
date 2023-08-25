require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  database: process.env.DATABASE || 'mongodb+srv://adam:<tajne>@cluster0.bw7rqub.mongodb.net/?retryWrites=true&w=majority',
  sessionKeySecret: process.env.SESSION_KEY_SECRET,
  ssl: process.env.SSL || false,
};
