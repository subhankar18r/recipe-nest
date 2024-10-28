import { getSearch } from "./getSearch.js";
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q") || "delicious";

document.querySelector("#heading").innerHTML = `"${query}'s recipe" for you`;

const container = document.querySelector("#container");

getSearch(container, query);
