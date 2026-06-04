import { Injectable } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';
import { Item } from './item.model';

const FAVORITES_KEY = 'favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favorites: Item[] = [];

  constructor() {
    this.load();
  }

  private load(): void {
    const raw = ApplicationSettings.getString(FAVORITES_KEY, '[]');
    try {
      this.favorites = JSON.parse(raw);
    } catch {
      this.favorites = [];
    }
  }

  private save(): void {
    ApplicationSettings.setString(FAVORITES_KEY, JSON.stringify(this.favorites));
  }

  getAll(): Item[] {
    return [...this.favorites];
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(f => f.id === id);
  }

  toggle(item: Item): void {
    const idx = this.favorites.findIndex(f => f.id === item.id);
    if (idx >= 0) {
      this.favorites.splice(idx, 1);
    } else {
      this.favorites.push(item);
    }
    this.save();
  }

  remove(id: number): void {
    this.favorites = this.favorites.filter(f => f.id !== id);
    this.save();
  }
}
