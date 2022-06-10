const sqlite3 = require("sqlite3").verbose();
let sql;

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// === Create Table === //
const createTable = (tableName) => {
  sql = `CREATE TABLE ${tableName}(id INTEGER PRIMARY KEY, first_name,last_name,username,password,email)`;
  db.run(sql);
};

// createTable("users");

// === Drop Table === //
const dropTable = (tableName) => {
  db.run(`DROP TABLE ${tableName}`);
};

// dropTable("users");

// === Insert data into table === //
const insertData = (
  tableName,
  { first_name, last_name, username, password, email }
) => {
  sql = `INSERT INTO ${tableName}(first_name,last_name,username,password,email) VALUES(?,?,?,?,?)`;
  db.run(sql, [first_name, last_name, username, password, email], (err) => {
    if (err) return console.error(err.message);
  });
};

const dataPoly = {
  first_name: "Poly1",
  last_name: "Doly2",
  username: "Trunda",
  password: "123456",
  email: "poly@gmail.com",
};

// insertData("users", dataPoly);

// === UPDATE DATA === //
const update = (id, firs_name) => {
  sql = `UPDATE users SET first_name = ? WHERE id = ?`;
  db.run(sql, [firs_name, id], (err) => {
    if (err) return console.error(err.message);
  });
};
// update(1, "Tomas");

// === DELETE DATA === //
const deleteData = (id) => {
  sql = `DELETE FROM users WHERE id=?`;
  db.run(sql, [id], (err) => {
    if (err) return console.error(err.message);
  });
};

// deleteData(1);

// === query sql === //

const showTable = (tableName) => {
  sql = `SELECT * FROM ${tableName}`;
  db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);

    rows.forEach((row) => {
      console.table(row);
    });
  });
};

showTable("users");
