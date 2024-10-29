import { header } from "./components.js";
import { getSearch } from "./getSearch.js";

document.querySelector(".header").innerHTML = header();
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q") || "delicious";

document.querySelector("#heading").innerHTML = `"${query}'s recipe" for you`;

const container = document.querySelector("#container");

getSearch(container, query);
