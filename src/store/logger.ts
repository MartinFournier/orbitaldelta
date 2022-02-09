import { playerActions } from 'app/components/Player/slice';
import { createLogger } from 'redux-logger';

const ignoredActions = [playerActions.incrementProcessingDeltaMs.type, playerActions.changeLastProcessed.type];

export default createLogger({
  predicate: (getState, action) => !ignoredActions.includes(action.type),
});
