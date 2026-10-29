// https://ghibliapi.dev/films


// const searchForm = document.querySelector('#search-form')
let allFilms = []
const filmListEl = document.querySelector(".films__list");

async function renderFilms(filter) {
  const film = await fetch("https://ghibliapi.dev/films")
  const filmData = await film.json();
  let allFilms = filmData;

  console.log(films)

  filmListEl.innerHTML = filmData.map((film) => filmHTML(film));
}
 
renderFilms()

function filmHTML(film) {
  return `
  <div class="film">
    <div class="film__card">
        <figure class="film__img--wrapper">
          <img class="film__img" src="${film.image}" alt="">
        </figure>  
        <div class="film__card--bg"></div>
        <div class="film__info">
          <p>Director:<br> ${film.director}</p>
          <p>Released:<br> ${film.release_date}</p>
          <p>Runtime:<br> ${film.running_time}</p>
          <p>Rotten Tomatoes:<br> ${film.rt_score}</p>
        </div>
    </div>
  </div>`
}

// <p>Synopsis: ${film.description}</p>


async function onSearchChange(event) {
  const title = event.target.value.toLowerCase();
  const response = await fetch("https://ghibliapi.dev/films");
  const filmData = await response.json();

  const filteredFilms = filmData.filter((film) =>
    film.title.toLowerCase().includes(title)
  );

  filmListEl.innerHTML = filteredFilms
    .map((film) => filmHTML(film))
    .join("");
}

function showSearchResult(title) {
  console.log(title)  
}

function sortFilms() {
  const filter = document.querySelector("#filter").value
  const films = [...allFilms];

  if (filter === 'DATE_ASCENDING') {
    films.sort((a, b) => (a.release_date - b.release_date));
  }
  else if (filter === 'DATE_DESCENDING') {
    films.sort((a,b) => (b.release_date - a.release_date))
  }
  else if (filter === 'RATING_ASCENDING') {
    films.sort((a, b) => (a.rt_score - b.rt_score))
  }
  else if (filter === 'RATING_DESCENDING') {
    films.sort ((b, a) => (b.rt_score - a.rt_score))
  }
}




//search by title


  // <p><b>Synopsis:</b> ${film.description}</p>
// const filmListEl = document.querySelector('.film-list');

// async function onSearchChange(event){
//   const film = event.target.value
//   const films = await fetch("https://ghibliapi.dev/films");
//   const filmData = await films.json();
//   filmListEl.innerHTML = filmData.map((film) => filmHTML(film)).join("");
// }

// function filmHTML(film) {

//   return `<div class="film-card">
//     <div class="film-card__container">
//       <img class="film__img" src="${film.image}" alt="">
//       <div class="film-info">
//         <p><b>Directed by</b><br> ${ film.director}</p>
//         <p><b>Released:</b><br> ${film.release_date}</p>
//         <p><b>Runtime:</b><br> ${film.running_time}</p>
//         <p><b>Rotten Tomatoes :</b><br> ${film.rt_score}</p>
//       </div>
//     <p><b>Synopsis:</b> ${film.description}<p>
//     </div>
//     </div>`
// }