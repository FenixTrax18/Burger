var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  var pool = mysql.createPool(process.env.JAWSDB_URL);
  connection = pool.getConnection();
}

else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "MySQL_P@ssw0rd",
    database: "burgers_db"
  });
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
}

module.exports = connection;
