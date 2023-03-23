const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
    host: "containers-us-west-108.railway.app",
    port: 6259,
    user: "root",
    password: "qDU17Uu7aalcmhCYDJU7",
    database: "railway",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
        return;
    }
    console.log("Connected to MySQL database...");
});

app.use(express.json());

app.post('/table1', (req, res) => {
    const { user , email, workout, day } = req.body;

    const sql = 'INSERT INTO table1 (user, email , workout, day) VALUES (?, ?, ?, ?)';
    const values = [user,email,  workout, day];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error inserting workout data into database');
        } else {
            res.status(200).send('Workout data inserted into database');
        }
    });
});



// Start the server
const port = process.env.PORT || 4100;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
