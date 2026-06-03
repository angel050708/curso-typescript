import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Item } from '../shared/item.model';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    if (idParam) {
      this.item = this.itemsService.getById(+idParam);
    }
  }

  onBack(): void {
    this.routerExtensions.back();
  }
}
