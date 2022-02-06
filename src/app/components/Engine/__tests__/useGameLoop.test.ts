import { renderHook } from '@testing-library/react-hooks';
import useGameLoop from '../useGameLoop';

describe('useGameLoop', () => {
  it('Should have a frameTime', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGameLoop(() => {}, 100));

    expect(result.current.currentFrameTime).toBe(0);
    await waitForNextUpdate();
    expect(result.current.currentFrameTime).toBeGreaterThan(0);
  });

  it('Frametime should increment', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGameLoop(() => {}, 100));

    await waitForNextUpdate();
    const firstValue = result.current!;
    expect(firstValue).toBeDefined();
    await waitForNextUpdate();
    expect(result.current.currentFrameTime).toBeGreaterThan(firstValue.currentFrameTime);
  });
});
