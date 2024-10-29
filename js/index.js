import { header } from "./components.js";
import { getSearch } from "./getSearch.js";

document.querySelector(".header").innerHTML = header();

const container = document.querySelector("#search-container");
// getSearch(container, "delicious");

const searchInput = document.querySelector("input[type=search]");

searchInput.addEventListener("keydown", (e) => {
  if (!e.target.value) return;
  if (e.key === "Enter") {
    location.href = `./search.html?q=${e.target.value}`;
  }
});

window.goToSearch = function () {
  const query = document.querySelector("input[type=search]").value;
  if (!query) return;
  location.href = `./search.html?q=${query}`;
};
