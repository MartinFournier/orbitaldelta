import { createLogger } from 'redux-logger';
import { devtoolBlackListedActions } from './devTool';

export default createLogger({
  predicate: (getState, action) =>
    !devtoolBlackListedActions.includes(action.type),
});
