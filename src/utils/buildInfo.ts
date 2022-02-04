const buildInfo = {
  version: process.env.BUILD_VERSION,
  commit: process.env.BUILD_COMMIT,
  time: process.env.BUILD_TIME,
};

export default buildInfo;
