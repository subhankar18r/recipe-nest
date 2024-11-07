import { header, footer } from "./components.js";
import { getSearch, pushElementToContainer } from "./getSearch.js";

document.querySelector("header").innerHTML = header();
document.querySelector("footer").innerHTML = footer();

const container = document.querySelector("#search-container");

const data = await getSearch("delicious");
pushElementToContainer(container, data);

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
