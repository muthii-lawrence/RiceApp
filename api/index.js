const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "My-db-1-password",
  database: "mysql",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");

  db.query(
    `CREATE TABLE IF NOT EXISTS members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      names VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )`,
    (err) => {
      if (err) {
        console.error("Error creating members table:", err);
      } else {
        console.log("members table created successfully");
      }
    }
  );
});

app.post("/register", (req, res) => {
  // Log the request body
  // console.log("Request body:", req.body);

  const { names, email, location, address, phone, password } = req.body;

  // Check if any required field is missing
  if (!names || !email || !location || !address || !phone || !password) {
    return res.status(400).json("All fields are required");
  }

  // Check existing user

  const q = "SELECT * FROM members WHERE email = ?";
  db.query(q, [email], (err, data) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json("Internal server error");
    }
    if (data.length) {
      return res.status(409).json("User already exists");
    }

    // Generate salt and hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Add user
    const q =
      "INSERT INTO members(`names`, `email`, `location`, `address`, `phone`, `password`) VALUES (?)";
    const values = [names, email, location, address, phone, hash];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error("Error inserting into database:", err);
        return res.status(500).json("Internal server error");
      }
      return res.status(200).json("User has been created");
    });
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
