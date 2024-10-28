async function getSearch(container, query) {
  try {
    document.querySelector("#loading").style.display = "block";

    const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "ztG68rK7Od0mK8ATYgQOaw==cpjz45nLiu58XIKk",
      },
    });
    const data = await response.json();

    document.querySelector("#loading").style.display = "none";
    if (data.length > 0) pushElementToContainer(container, data);
    else {
      document.querySelector("#search-error").style.display = "block";
      document.querySelector("#search-error").innerHTML =
        "No results found, try searching something else";
    }
  } catch (error) {
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#search-error").style.display = "block";
  }
}

async function pushElementToContainer(container, data) {
  Array.from(data).forEach(async (e) => {
    let imgUrl = await getImage(e.title);
    const item = document.createElement("a");
    item.href = "#";
    item.innerHTML = `
      <img src="${imgUrl}" alt="" />
      <h3>${e.title}</h3>    
      `;
    container.appendChild(item);
  });
}

async function getImage(ingredient) {
  const imageApiUrl = `https://api.unsplash.com/search/photos?query=${ingredient} food &client_id=KPW-pBVpwqE-Tzvh6e6soA2OpCC38f_uoP_4b0_4HFk&per_page=1`;

  const response = await fetch(imageApiUrl, {
    method: "GET",
    headers: {
      "Accept-Version": "v1",
    },
  });
  const data = await response.json();

  return data.results[0].urls.regular;
}

export { getSearch };
