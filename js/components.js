function header() {
  return `
      <a href="https://subhankar18r.github.io/recipe-nest/">
        <img src="./images/transparent-logo.png" alt="recipe nest" />
      </a>
      <div class="header-right">
        <div class="input-container">
          <input
            type="search"
            placeholder="What would you like to cook today?"
          />
          <img onclick="goToSearch()" src="./images/search.svg" />
        </div>
        <button>Favourites</button>
        <button>Schedule</button>
      </div>
    `;
}

function footer() {
  return `
      <p>made with <img src="./images/favourite.svg" /> by Subhankar</p>
      <div>
        <img src="./images/github.svg" alt="" />
        <img src="./images/twitter.svg" alt="" />
        <img src="./images/linkedin.svg" alt="" />
      </div>
  `;
}

export { header, footer };
