import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import themesData from "@/config/themes.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(fas, fab, far);

//配置默认css主题
const setThemes = () => {
    const curThemes = themesData["midnight"];
    for (let key in curThemes) {
        document.body.style.setProperty(`--${key}`, curThemes[key]);
    }
};

import "@/assets/style/variable.css";
import "@/assets/style/themes.css";
import "@/assets/style/global.scss";
import "github-markdown-css";

setThemes();
const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
