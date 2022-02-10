import * as slice from '..';

describe('Player slice', () => {
  let state: slice.PlayerState;

  beforeEach(() => {
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(slice.reducer(undefined, { type: '' })).toEqual(state);
  });

  it('should handle changeUsername', () => {
    const text = 'test';
    expect(slice.reducer(state, slice.playerActions.changeUsername(text))).toEqual<slice.PlayerState>({
      ...slice.initialState,
      username: text,
    });
  });
});
