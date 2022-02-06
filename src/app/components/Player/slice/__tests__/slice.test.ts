import * as slice from '..';
import { PlayerState } from '../types';

describe('Player slice', () => {
  let state: PlayerState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle changeUsername', () => {
    const text = 'test';
    expect(slice.reducer(state, slice.playerActions.changeUsername(text))).toEqual<PlayerState>({
      ...slice.initialState,
      username: text,
    });
  });
});
