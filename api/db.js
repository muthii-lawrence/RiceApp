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
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    loaction VARCAR(255) NOT NULL,
    address VARCAR(255) NOT NULL
    img VARCHAR(255),
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
