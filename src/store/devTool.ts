import { playerActions } from 'app/player/slice';

/**
 * These entries will not appear in the redux dev tool. Used to prevent spammy actions from flooding the dev tool.
 */
export const devtoolBlackListedActions = [
  playerActions.incrementProcessingDeltaMs.type,
  playerActions.changeLastProcessed.type,
];
