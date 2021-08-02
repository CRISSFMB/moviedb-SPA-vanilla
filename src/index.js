import Header from "./templates/Header";

import "./styles/styles.scss";

(async function app() {
    const main = null || document.getElementById("main");
    main.innerHTML = await Header();
})();