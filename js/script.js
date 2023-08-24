const apiUrl = "https://ghibliapi.vercel.app/";

async function getFilms() {
  try {
    const response = await fetch(`${apiUrl}films`);
    if (!response.ok) {
      throw new Error("Network error");
    }
    const films = await response.json();
    return films;
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
}

async function displayFilms() {
  const films = await getFilms();
  const mainContainer = document.getElementById("container");

  films.forEach((film) => {
    const filmElement = document.createElement("div");
    filmElement.classList.add("film");

    filmElement.innerHTML = `
    <h3 class="title">${film.title}</h3>
    <p class="info"><strong>Description:</strong> ${film.description}</p>
`;

    mainContainer.appendChild(filmElement);
  });
}

displayFilms();

// async function moreInfo() {
//   const info = await getFilms();
//   const button = document.getElementsByClassName("film");

//   info.forEach(() => {
//     const readMore = document.createElement("div");
//     readMore.classList.add("mroe");

//     readMore.innerHTML = `
//     `;
//   });
// }
