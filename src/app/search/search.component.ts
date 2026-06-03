import { Component, OnInit } from '@angular/core';
import { Application, GestureEventData } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Item } from '../shared/item.model';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  filteredItems: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.filteredItems = this.itemsService.getAll();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term || term.length < 2) {
      this.filteredItems = this.itemsService.getAll();
      return;
    }
    this.filteredItems = this.itemsService
      .getAll()
      .filter(i =>
        i.name.toLowerCase().includes(term) ||
        i.category.toLowerCase().includes(term)
      );
  }

  onSearchIconDoubleTap(event: GestureEventData): void {
    const view = event.view as any;
    view.rotate = 0;
    view.animate({ rotate: 360, duration: 500 }).then(() => {
      view.rotate = 0;
    });
  }
}
