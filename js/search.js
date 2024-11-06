import { footer, header } from "./components.js";
import { getSearch, pushElementToContainer } from "./getSearch.js";

document.querySelector("header").innerHTML = header();
document.querySelector("footer").innerHTML = footer();

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q") || "delicious";

document.querySelector("#heading").innerHTML = `"${query}'s recipe" for you`;

const container = document.querySelector("#container");

const data = await getSearch(query);
pushElementToContainer(container, data);
