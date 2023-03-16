// const express = require("express");
// const mysql = require("mysql2");
// const app = express();

// const connection = mysql.createConnection({
//     host: "containers-us-west-108.railway.app",
//     port: 6259,
//     user: "root",
//     password: "qDU17Uu7aalcmhCYDJU7",
//     database: "railway",
// });

// connection.connect((err) => {
//     if (err) {
//         console.error("Error connecting to MySQL database:", err);
//         return;
//     }
//     console.log("Connected to MySQL database...");
// });

// app.use(express.json());

// app.post('/workout', (req, res) => {
//     const { user, workout } = req.body;

//     const sql = 'INSERT INTO Workouts (user, workout) VALUES (?, ?)';
//     const values = [user, workout];

//     connection.query(sql, values, (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error inserting workout data into database');
//         } else {
//             res.status(200).send('Workout data inserted into database');
//         }
//     });
// });



// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}...`);
// });