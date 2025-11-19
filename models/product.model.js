const db = require('./db.config');

// Model Product (berisi query dasar)
const Product = {
    // get all
    getAll: (callback) => {
        db.query("SELECT * FROM produk", callback);
    },

    // get by id
    getById: (id, callback) => {
        db.query("SELECT * FROM produk WHERE id = ?", [id], callback);
    },

    // create
    create: (data, callback) => {
        db.query(
            "INSERT INTO produk (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)",
            [data.nama, data.deskripsi, data.harga, data.foto],
            callback
        );
    },

    // update
    update: (id, data, callback) => {
        db.query(
            "UPDATE produk SET nama=?, deskripsi=?, harga=?, foto=? WHERE id=?",
            [data.nama, data.deskripsi, data.harga, data.foto, id],
            callback
        );
    },

    // delete
    delete: (id, callback) => {
        db.query(
            "DELETE FROM produk WHERE id=?",
            [id],
            callback
        );
    }
};

module.exports = Product;