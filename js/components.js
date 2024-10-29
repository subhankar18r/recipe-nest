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

export { header };
