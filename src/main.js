import App from "./App.vue";
import camelCase from "lodash/camelCase";
import router from "./router";
import store from "./store/store";
import upperFirst from "lodash/upperFirst";
import "nprogress/nprogress.css";
import Vue from "vue";

const requireComponent = require.context(
  "./components",
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  // camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))

  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
