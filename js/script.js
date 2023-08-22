const apiUrl = "https://ghibliapi.vercel.app/";

// async function getFilms() {
//   const response = await fetch(`${apiUrl}films`);
//   const films = await response.json();
//   console.log(films);
// }

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
    <h2>${film.title}</h2>
    <p><strong>Director:</strong> ${film.director}</p>
    <p><strong>Release Year:</strong> ${film.release_date}</p>
    <p><strong>Description:</strong> ${film.description}</p>
`;

    mainContainer.appendChild(filmElement);
  });
}

displayFilms();
