const express = require('express');
const app = express();
const PORT = 3000;

const items = [
  { id: 1, name: 'Laptop Pro', category: 'Tecnología', description: 'Laptop de alto rendimiento con procesador i9 y 32GB RAM.', price: 1299 },
  { id: 2, name: 'Auriculares BT', category: 'Tecnología', description: 'Auriculares inalámbricos con cancelación activa de ruido.', price: 199 },
  { id: 3, name: 'Zapatillas Runner', category: 'Deportes', description: 'Zapatillas ligeras y cómodas para running profesional.', price: 89 },
  { id: 4, name: 'Silla Ergonómica', category: 'Hogar', description: 'Silla de oficina con soporte lumbar ajustable.', price: 349 },
  { id: 5, name: 'Libro Angular', category: 'Libros', description: 'Guía completa de desarrollo con Angular para todos los niveles.', price: 39 },
  { id: 6, name: 'Monitor 4K', category: 'Tecnología', description: 'Monitor 4K UHD de 27 pulgadas.', price: 599 },
  { id: 7, name: 'Mochila Sport', category: 'Deportes', description: 'Mochila deportiva resistente al agua.', price: 45 },
  { id: 8, name: 'Teclado Mecánico', category: 'Tecnología', description: 'Teclado mecánico RGB con switches Cherry MX.', price: 129 },
  { id: 9, name: 'Mouse Inalámbrico', category: 'Tecnología', description: 'Mouse ergonómico inalámbrico con 6 botones.', price: 49 },
  { id: 10, name: 'Camiseta Polo', category: 'Ropa', description: 'Camiseta polo de algodón premium.', price: 29 },
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/items', (req, res) => {
  const { q } = req.query;
  if (!q || q.trim() === '') {
    return res.json(items);
  }
  const term = q.toLowerCase().trim();
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(term) ||
    item.category.toLowerCase().includes(term)
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
