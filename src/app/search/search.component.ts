import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Item } from '../shared/item.model';
import { ApiService } from '../shared/api.service';
import { FavoritesService } from '../shared/favorites.service';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  filteredItems: Item[] = [];

  constructor(
    private apiService: ApiService,
    private favoritesService: FavoritesService,
  ) {}

  ngOnInit(): void {
    this.loadItems('');
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onSearch(): void {
    this.loadItems(this.searchTerm);
  }

  private loadItems(query: string): void {
    this.apiService.searchItems(query).subscribe({
      next: (items) => (this.filteredItems = items),
      error: () => (this.filteredItems = []),
    });
  }

  isFavorite(item: Item): boolean {
    return this.favoritesService.isFavorite(item.id);
  }

  toggleFavorite(item: Item): void {
    this.favoritesService.toggle(item);
  }
}
