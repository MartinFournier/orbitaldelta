import { createTransform } from 'redux-persist';
import { TransformConfig } from 'redux-persist/lib/createTransform';

function transform(config?: TransformConfig) {
  return createTransform(
    (inboundState: string) => window.btoa(encodeURIComponent(inboundState)),
    (outboundState: string) => decodeURIComponent(window.atob(outboundState)),
    config,
  );
}

export default transform;
