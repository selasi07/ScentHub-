const express = require("express");
const router = express.Router();
const db = require("../db");

console.log("[INFO] Product routes loaded.");

//  ALL PRODUCTS
router.get("/", (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) {
    console.error("[ERROR] Failed to retrieve products:", err.message);

    res.status(500).json({
        error: err.message
    });

    return;
}

        res.json(rows);
    });
});

// ADD PRODUCT
router.post("/", (req, res) => {
    const{
           perfume_name,
        brand,
        category,
        price,
        quantity
    } = req.body;
if (
    !perfume_name ||
    !brand ||
    !category ||
    price === undefined ||
    quantity === undefined
) {
    return res.status(400).json({
        message: "All fields are required."
    });
}

if (price < 0) {
    return res.status(400).json({
        message: "Price cannot be negative."
    });
}

if (quantity < 0) {
    return res.status(400).json({
        message: "Quantity cannot be negative."
    });
}

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
    console.error("[ERROR] Failed to add product:", err.message);

    res.status(500).json({
        error: err.message
    });

    return;
}
console.log(
    `[INFO] Product added: ${perfume_name} (ID: ${this.lastID})`
);
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
    console.error("[ERROR] Failed to retrieve product:", err.message);

    res.status(500).json({
        error: err.message
    });

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
    console.error("[ERROR] Failed to update product :", err.message);

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

console.log(
    `[INFO] Product updated: ID ${id}`
);
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
                console.error("[ERROR] Failed to delete product:", err.message);
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

console.log(
    `[INFO] Product deleted: ID ${id}`
);
            res.json({
                message: "Product deleted successfully"
            });
        }
    );
});


module.exports = router;