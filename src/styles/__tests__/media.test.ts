import { media, sizes } from '../media';
import { css } from 'styled-components';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = media.small`color: red;`
      .join('')
      .split('\n')
      .map(line => line.trim())
      .join('\n');
    const cssVersion = css`
      @media (min-width: ${sizes.small}px) {
        color: red;
      }
    `
      .join('')
      .split('\n')
      .map(line => line.trim())
      .join('\n');
    expect(mediaQuery).toEqual(cssVersion);
  });
});
