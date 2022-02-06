import { PlayerState } from './slice/types';

export function updatePlayer(player: PlayerState, elapsed: number): PlayerState {
  console.log(elapsed);
  return { ...player };
}
