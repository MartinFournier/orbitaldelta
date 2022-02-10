import { PlayerState } from './slice';
import log from 'utils/logger';

export function updatePlayer(player: PlayerState, deltaMs: number): PlayerState {
  log.debug(`Player Update -> Delta: ${deltaMs.toFixed(2)}ms.`);
  return { ...player };
}
