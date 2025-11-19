const Product = require('../models/product.model');

// GET ALL
exports.getAllProducts = (req, res) => {
    Product.getAll((err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
};

// GET BY ID
exports.getProductById = (req, res) => {
    Product.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
};

// CREATE
exports.createProduct = (req, res) => {
    Product.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({
            message: "Produk berhasil ditambahkan",
            id: result.insertId
        });
    });
};

// UPDATE
exports.updateProduct = (req, res) => {
    Product.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Produk berhasil diupdate" });
    });
};

// DELETE
exports.deleteProduct = (req, res) => {
    Product.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Produk berhasil dihapus" });
    });
};
