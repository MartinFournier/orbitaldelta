import { playerActions } from 'app/player/slice';
import { gameTimeActions } from 'app/game-time/slice';

/**
 * These entries will not appear in the redux dev tool. Used to prevent spammy actions from flooding the dev tool.
 */
export const devtoolBlackListedActions = [
  playerActions.incrementProcessingDeltaMs.type,
  playerActions.markAsProcessed.type,
  gameTimeActions.incrementDeltaMs.type,
  gameTimeActions.updateGameTime.type,
];
