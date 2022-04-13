module.exports = {
  timeout: 240000,
  require: [
    "ts-node/register",
  ],
  "full-trace": true,
  bail: false,
  exit: true,
  spec: "test/**/*.test.ts",
};
