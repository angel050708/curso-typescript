import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReadNowState } from './app.state';

export const selectReadNowState = createFeatureSelector<ReadNowState>('readNow');

export const selectReadNowItems = createSelector(
  selectReadNowState,
  (state) => state.items
);
