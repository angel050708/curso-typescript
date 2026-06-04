import { createAction, props } from '@ngrx/store';
import { Item } from '../shared/item.model';

export const addReadNow = createAction(
  '[ReadNow] Add Item',
  props<{ item: Item }>()
);
