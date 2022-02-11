import * as selectors from '../selectors';
import { initialState } from '..';
import { RootState } from 'store';
import { EmptyObject } from '@reduxjs/toolkit';

describe('Player selectors', () => {
  let state: RootState | EmptyObject = {};

  beforeEach(() => {
    state = {};
  });

  it('should select the initial state', () => {
    expect(selectors.selectUsername(state as any)).toEqual(
      initialState.username,
    );
  });

  it('should select username', () => {
    const username = 'test';
    (state as any) = {
      player: { ...initialState, username },
    };
    expect(selectors.selectUsername(state as any)).toEqual(username);
  });
});
