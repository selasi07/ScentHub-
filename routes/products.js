const express = require("express");
const router = express.Router();
const db = require("../db");

console.log("products.js loaded");

//  ALL PRODUCTS
router.get("/", (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json(rows);
    });
});

// ADD PRODUCT
router.post("/", (req, res) => {
    const {
        perfume_name,
        brand,
        category,
        price,
        quantity
    } = req.body;

    const sql = `
        INSERT INTO products 
        (perfume_name, brand, category, price, quantity)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(
        sql,
        [perfume_name, brand, category, price, quantity],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.json({
                message: "Product added successfully",
                id: this.lastID
            });
        }
    );
});


// ===============================
// GET SINGLE PRODUCT BY ID
// ===============================
router.get("/:id", (req, res) => {
    const id = req.params.id;

    db.get(
        "SELECT * FROM products WHERE id = ?",
        [id],
        (err, row) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (!row) {
                res.status(404).json({
                    message: "Product not found"
                });
                return;
            }

            res.json(row);
        }
    );
});


// ===============================
// UPDATE PRODUCT
// ===============================
router.put("/:id", (req, res) => {
    const id = req.params.id;

    const {
        perfume_name,
        brand,
        category,
        price,
        quantity
    } = req.body;


    const sql = `
        UPDATE products
        SET perfume_name = ?,
            brand = ?,
            category = ?,
            price = ?,
            quantity = ?
        WHERE id = ?
    `;


    db.run(
        sql,
        [
            perfume_name,
            brand,
            category,
            price,
            quantity,
            id
        ],
        function(err) {

            if (err) {
                res.status(500).json({
                    error: err.message
                });
                return;
            }


            if (this.changes === 0) {
                res.status(404).json({
                    message: "Product not found"
                });
                return;
            }


            res.json({
                message: "Product updated successfully",
                id: id
            });
        }
    );
});


// ===============================
// DELETE PRODUCT
// ===============================
router.delete("/:id", (req, res) => {
    const id = req.params.id;


    db.run(
        "DELETE FROM products WHERE id = ?",
        [id],
        function(err) {

            if (err) {
                res.status(500).json({
                    error: err.message
                });
                return;
            }


            if (this.changes === 0) {
                res.status(404).json({
                    message: "Product not found"
                });
                return;
            }


            res.json({
                message: "Product deleted successfully"
            });
        }
    );
});


module.exports = router;