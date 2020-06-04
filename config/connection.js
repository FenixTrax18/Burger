var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ec2-52-7-39-178.compute-1.amazonaws.com",
  port: 5432,
  user: "rvqkivukjbpmgo",
  password: "ad9bd7a6e92b6efb5aed742cd3851679d21317ee8e89d3bd2d944b20b918be84",
  database: "d4tog5ro211qhb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
