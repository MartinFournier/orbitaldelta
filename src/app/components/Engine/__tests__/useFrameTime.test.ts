import { renderHook } from '@testing-library/react-hooks';
import useFrameTime from '../useFrameTime';

describe('useFrameTime', () => {
  it('Should have a frameTime', async () => {
    const { result, waitForNextUpdate } = renderHook(useFrameTime);

    expect(result.current).toBeUndefined();
    await waitForNextUpdate();
    expect(result.current).toBeGreaterThan(0);
  });

  it('Frametime should increment', async () => {
    const { result, waitForNextUpdate } = renderHook(useFrameTime);

    await waitForNextUpdate();
    const firstValue = result.current!;
    expect(firstValue).toBeDefined();
    await waitForNextUpdate();
    expect(result.current).toBeGreaterThan(firstValue);
  });
});
