import { PlayerState } from './slice';
import log from 'utilities/logger';

export function updatePlayer(
  player: PlayerState,
  deltaMs: number,
): PlayerState {
  log.debug(`Player Update -> Delta: ${deltaMs.toFixed(2)}ms.`);
  return { ...player };
}
