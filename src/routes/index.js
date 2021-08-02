/*components*/
import Header from "../templates/Header";

/*pages Screen*/

import HomeScreen from "../page/HomeScreen";
import Error404Screen from "../page/Error404Screen";

/*utils*/

import getQuery from "../utils/getQuery";
import resolvesRoutes from "../utils/resolveRoutes";

/*routes*/

const routes = {
    "/": HomeScreen,
    "/:id": Header,
    "/contact": "contact",
};

/*router*/

const router = async() => {
    /*selects*/
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML = await Header();

    /*getquery*/
    let query = getQuery();
    let routestring = await resolvesRoutes(query);

    /*validate router */
    let render = routes[routestring] ? routes[routestring] : Error404Screen;

    /*render my content*/
    content.innerHTML = await render();
};

export default router;