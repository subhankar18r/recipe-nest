import { footer, header, recipe } from "./components.js";
import { getSearch } from "./getSearch.js";

document.querySelector("header").innerHTML = header();
document.querySelector("footer").innerHTML = footer();

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q") || "";

const data = await getSearch(query);
document.querySelector(".recipe").innerHTML = await recipe(data);
document.querySelector(".end-text").style.display = "block";
