export function updateGameTime(
  currentTime: number,
  speed: number,
  deltaMs: number,
): number {
  console.debug(`Game Time Update -> Delta: ${deltaMs.toFixed(2)}ms.`);
  return currentTime + deltaMs * speed;
}
