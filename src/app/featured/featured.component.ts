import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { Store } from '@ngrx/store';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Item } from '../shared/item.model';
import { FavoritesService } from '../shared/favorites.service';
import { AppState } from '../store/app.state';
import { addReadNow } from '../store/read-now.actions';

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  favorites: Item[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getAll();
  }

  onReadNow(item: Item): void {
    this.store.dispatch(addReadNow({ item }));
  }

  onRemoveFavorite(item: Item): void {
    this.favoritesService.remove(item.id);
    this.loadFavorites();
  }
}
