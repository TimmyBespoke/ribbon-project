import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import { registerLicense } from '@syncfusion/ej2-base';
// registerLicense('YOUR LICENSE KEY HERE');
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app");
