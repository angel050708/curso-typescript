import { Injectable } from '@angular/core';
import { Item } from './item.model';

const CATEGORIES = ['Tecnología', 'Ropa', 'Hogar', 'Deportes', 'Libros'];
const NAMES = [
  'Laptop Pro', 'Auriculares BT', 'Zapatillas Runner', 'Silla Ergonómica',
  'Libro Angular', 'Monitor 4K', 'Mochila Sport', 'Teclado Mecánico',
  'Mouse Inalámbrico', 'Camiseta Polo',
];

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private items: Item[] = [
    { id: 1, name: 'Laptop Pro', category: 'Tecnología', description: 'Laptop de alto rendimiento con procesador i9 y 32GB RAM.', price: 1299 },
    { id: 2, name: 'Auriculares BT', category: 'Tecnología', description: 'Auriculares inalámbricos con cancelación activa de ruido.', price: 199 },
    { id: 3, name: 'Zapatillas Runner', category: 'Deportes', description: 'Zapatillas ligeras y cómodas para running profesional.', price: 89 },
    { id: 4, name: 'Silla Ergonómica', category: 'Hogar', description: 'Silla de oficina con soporte lumbar ajustable.', price: 349 },
    { id: 5, name: 'Libro Angular', category: 'Libros', description: 'Guía completa de desarrollo con Angular para todos los niveles.', price: 39 },
  ];
  private nextId = 6;

  getAll(): Item[] {
    return [...this.items];
  }

  getById(id: number): Item | undefined {
    return this.items.find(i => i.id === id);
  }

  addRandom(): Item {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const price = Math.floor(Math.random() * 500) + 10;
    const item: Item = {
      id: this.nextId++,
      name,
      category,
      description: `Producto aleatorio en categoría ${category}.`,
      price,
    };
    this.items.push(item);
    return item;
  }

  updateCategory(id: number, category: string): void {
    const item = this.items.find(i => i.id === id);
    if (item) item.category = category;
  }
}
