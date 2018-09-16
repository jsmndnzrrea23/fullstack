const express = require("express");
const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'patsydb.com4k2xtorpw.ap-southeast-1.rds.amazonaws.com',
  user     : 'patsydigital01',
  password : 'pAtsy06072018',
  database : 'test_db'
});

db.connect(err => {
	if (err) err;		
});

const app = express();

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, rows) => {
    	if (err) res.send(400); 	
        res.json({
        	data: rows
        });
    });
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));