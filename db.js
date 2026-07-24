const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database", "scenthub.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed.");
    } else {
        console.log("Connected to SQLite database.");

        db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            perfume_name TEXT NOT NULL,
            brand TEXT,
            category TEXT,
            price REAL,
            quantity INTEGER
        )
        `);
    }
});

module.exports = db;