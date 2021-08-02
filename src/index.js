/* import styles*/
import "./styles/scss/styles.scss";

/*import router*/
import router from "./routes/index";

/*initialization of my router*/
window.addEventListener("load", router);

/*listen some change in  the query*/

window.addEventListener("hashchange", router);

/*addlistener*/
