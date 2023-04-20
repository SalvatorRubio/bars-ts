const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@utils": "src/utils",
    "@constants": "src/constants",
    "@pages": "src/pages",
    "@components": "src/components",
    "@hooks": "src/hooks",
    "@routes": "src/routes",
    "@type": "src/type",
    "@axios": "src/AxiosSetup",
    "@hoc": "src/hoc",
    "@UI": "src/UI",
  })(config);

  return config;
};
