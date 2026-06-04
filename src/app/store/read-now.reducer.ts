import { createReducer, on } from '@ngrx/store';
import { ReadNowState } from './app.state';
import { addReadNow } from './read-now.actions';

const initialState: ReadNowState = {
  items: [],
};

export const readNowReducer = createReducer(
  initialState,
  on(addReadNow, (state, { item }) => ({
    ...state,
    items: state.items.some(i => i.id === item.id)
      ? state.items
      : [...state.items, item],
  }))
);
