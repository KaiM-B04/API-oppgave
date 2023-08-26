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
    <button class="details-button" data-filmid="${film.id}">Details</button>
    <div class="film-details" id="film-details-${film.id}" style="display: none;">
      <p><b>Original Title: </b>${film.original_title} <br><i>${film.original_title_romanised}</i></p>
      <p><b>Run Time: </b>${film.running_time} min</p>
      <p><b>Released: </b>${film.release_date}</p>
      <p><b>Director: </b>${film.director}</p>
      <p><b>Producer: </b>${film.producer}</p>
      <button class="close">Close</button>
    </div>
  `;

    const detailsButton = filmElement.querySelector(".details-button");
    const close = filmElement.querySelector(".close");
    const filmDetails = filmElement.querySelector(`#film-details-${film.id}`);

    detailsButton.addEventListener("click", () => {
      filmDetails.style.display = "block";
    });

    close.addEventListener("click", () => {
      filmDetails.style.display = "none";
    });

    mainContainer.appendChild(filmElement);
  });
}

displayFilms();
