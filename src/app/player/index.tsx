import { PlayerState } from './slice';

export function updatePlayer(
  player: PlayerState,
  deltaMs: number,
): PlayerState {
  console.debug(`Player Update -> Delta: ${deltaMs.toFixed(2)}ms.`);
  return { ...player };
}
