import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Application, Dialogs, GestureEventData } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Item } from '../shared/item.model';
import { ItemsService } from '../shared/items.service';

const CATEGORIES = ['Tecnología', 'Ropa', 'Hogar', 'Deportes', 'Libros'];

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @ViewChild('toastLabel', { static: false }) toastLabelRef!: ElementRef;

  items: Item[] = [];
  toastMessage = '';

  constructor(
    private routerExtensions: RouterExtensions,
    private itemsService: ItemsService,
  ) {}

  ngOnInit(): void {
    this.items = this.itemsService.getAll();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  onItemTap(event: any): void {
    const item = this.items[event.index];
    this.routerExtensions.navigate(['/browse', item.id]);
  }

  async onCategoryTap(item: Item): Promise<void> {
    const result = await Dialogs.action({
      message: `Categoría actual: ${item.category}`,
      cancelButtonText: 'Cancelar',
      actions: CATEGORIES,
    });
    if (result && result !== 'Cancelar') {
      this.itemsService.updateCategory(item.id, result);
      this.items = this.itemsService.getAll();
      this.showToast(`Categoría cambiada a "${result}"`);
    }
  }

  onTagDoubleTap(event: GestureEventData): void {
    const view = event.view as any;
    view.rotate = 0;
    view.animate({ rotate: 360, duration: 500 }).then(() => {
      view.rotate = 0;
    });
  }

  onRefresh(event: any): void {
    const newItem = this.itemsService.addRandom();
    this.items = this.itemsService.getAll();
    event.object.refreshing = false;
    this.showToast(`"${newItem.name}" agregado al catálogo`);
  }

  private async showToast(message: string): Promise<void> {
    this.toastMessage = message;
    const view = this.toastLabelRef.nativeElement;
    await view.animate({ opacity: 1, duration: 300 });
    await new Promise<void>(resolve => setTimeout(resolve, 2000));
    await view.animate({ opacity: 0, duration: 300 });
  }
}
