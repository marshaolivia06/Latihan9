const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// User Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Product Routes 
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
