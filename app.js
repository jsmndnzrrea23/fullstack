const express = require("express");
const mysql = require('mysql');

const db = mysql.createConnection({
//test_db patsy
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
