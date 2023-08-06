// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2'
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs'
});

// simple query
connection.query(
  'SELECT * FROM `user`  ',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    let rows = results.map((row) =>{return row.id})
    console.log(rows); 
  
  }
);
export default connection