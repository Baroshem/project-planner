import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./fconfig/firebaseConfig";
import "firebase/firestore";
import firebase from "firebase";

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
