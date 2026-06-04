import { Item } from '../shared/item.model';

export interface ReadNowState {
  items: Item[];
}

export interface AppState {
  readNow: ReadNowState;
}
