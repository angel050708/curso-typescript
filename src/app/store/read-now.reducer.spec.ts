import { readNowReducer } from './read-now.reducer';
import { addReadNow } from './read-now.actions';
import { ReadNowState } from './app.state';
import { Item } from '../shared/item.model';

const mockItem: Item = {
  id: 1,
  name: 'Producto Test',
  category: 'Tecnología',
  description: 'Descripción de prueba',
  price: 99.99,
};

const mockItem2: Item = {
  id: 2,
  name: 'Otro Producto',
  category: 'Hogar',
  description: 'Otra descripción',
  price: 49.99,
};

describe('readNowReducer', () => {
  const initialState: ReadNowState = { items: [] };

  it('should return the initial state when action is unknown', () => {
    const state = readNowReducer(undefined, { type: '@@INIT' } as any);
    expect(state).toEqual(initialState);
    expect(state.items.length).toBe(0);
  });

  it('should add an item when addReadNow is dispatched', () => {
    const state = readNowReducer(initialState, addReadNow({ item: mockItem }));
    expect(state.items.length).toBe(1);
    expect(state.items[0]).toEqual(mockItem);
  });

  it('should not add a duplicate item (same id)', () => {
    const stateWithOne = readNowReducer(initialState, addReadNow({ item: mockItem }));
    const stateWithDuplicate = readNowReducer(stateWithOne, addReadNow({ item: mockItem }));
    expect(stateWithDuplicate.items.length).toBe(1);
  });

  it('should add multiple items with different ids', () => {
    const state1 = readNowReducer(initialState, addReadNow({ item: mockItem }));
    const state2 = readNowReducer(state1, addReadNow({ item: mockItem2 }));
    expect(state2.items.length).toBe(2);
    expect(state2.items[1]).toEqual(mockItem2);
  });

  it('should not mutate existing state when adding an item', () => {
    const prevState: ReadNowState = { items: [mockItem] };
    const nextState = readNowReducer(prevState, addReadNow({ item: mockItem2 }));
    expect(prevState.items.length).toBe(1);
    expect(nextState.items.length).toBe(2);
    expect(nextState).not.toBe(prevState);
  });

  it('should preserve existing items when adding a new one', () => {
    const stateWithOne = readNowReducer(initialState, addReadNow({ item: mockItem }));
    const stateWithTwo = readNowReducer(stateWithOne, addReadNow({ item: mockItem2 }));
    expect(stateWithTwo.items).toContain(mockItem);
    expect(stateWithTwo.items).toContain(mockItem2);
  });
});
