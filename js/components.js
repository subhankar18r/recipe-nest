import { getImage } from "./getSearch.js";

function header() {
  return `
<a href="./index.html">
  <img src="./images/transparent-logo.png" alt="recipe nest" />
</a>
<div class="header-middle">

  <div class="input-container">
    <input type="search" placeholder="What would you like to cook today?" />
    <img onclick="goToSearch()" src="./icons/search.svg" />
  </div>
</div>

<div class="header-right">
  <button> <img src="../icons/favourite.svg">Favourites</button>
</div>
`;
}

function footer() {
  return `
<p>made with <img src="./icons/favourite.svg" /> by Subhankar</p>
<div>
  <img src="./icons/github.svg" alt="" />
  <img src="./icons/twitter.svg" alt="" />
  <img src="./icons/linkedin.svg" alt="" />
</div>
`;
}

async function recipe(data) {
  const title = data[0].title;
  const imgUrl = await getImage(title);
  const servings = data[0].servings;

  const ingredients = data[0].ingredients.split("|");
  let ingredientLiString = "";
  ingredients.forEach((element) => {
    ingredientLiString += `<li>${element}</li>`;
  });

  const instructions = data[0].instructions.split(".");
  let instructionChildString = "";
  instructions.forEach((element, i) => {
    if (element === "") return;
    instructionChildString += `
    <div>
    <h6>Step ${i + 1}:</h6>
    <p>
      ${element}.
    </p>
  </div>`;
  });

  return `
<h1>${title}</h1>
<div class="action-icons">
  <span><img src="./icons/favourite.svg" /></span>
  <span><img src="./icons/calender.svg" /></span>
  <span><img src="./icons/share.svg" /></span>
</div>
<img class="recipe-img" src="${imgUrl}" />
<h4 class="servings">${servings}</h4>
<h4 class="ingredient-heading">Ingredients</h4>
<ul class="ingredients-container">
  ${ingredientLiString}
</ul>
<h4 class="instruction-heading">Instructions</h4>
<div class="steps">
  ${instructionChildString}
</div>
  `;
}

export { header, footer, recipe };
