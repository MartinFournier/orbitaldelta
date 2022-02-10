import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { persistor } from 'store';
import { App } from '../index';

const renderer = createRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<App persistor={persistor} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
