//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

export default {
  db: {
    uri: 'mongodb://heroku_n06qj498:kpu278rin79edf41h8khskgd93@ds351628.mlab.com:51628/heroku_n06qj498'//place the URI of your mongo database here.
  },
  port: 5000
};
