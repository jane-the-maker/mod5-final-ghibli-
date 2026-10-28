// https://ghibliapi.dev/films



const filmListEl = document.querySelector(".film-list");

async function renderFilms() {
  const film = await fetch("https://ghibliapi.dev/films?film=${title}")
  const filmData = await film.json();
 
  filmListEl.innerHTML = filmData.map((film) => filmHTML(film));
}
renderFilms()

function filmHTML(film) {
  return `
  <div class="film">
    <div class="film-card">
      <div class="film-card__container">
        <img class="film__img" src="${film.image}" alt="">
        <div class="film-info">
          <p><b>Director:</b><br> ${film.director}</p>
          <p><b>Released:</b><br> ${film.release_date}</p>
          <p><b>Runtime:</b><br> ${film.running_time}</p>
          <p><b>Rotten Tomatoes :</b><br> ${film.rt_score}</p>
        </div>
      <p><b>Synopsis:</b> ${film.description}<p>
      </div>
    </div>
  </div>`


async function onSearchChange(event) {
  const title = (event.target.value)
  renderFilms(title)
}

function showSearchResult(title) {
  console.log(title)  
}



//search by title


  // <p><b>Synopsis:</b> ${film.description}</p>







const filmListEl = document.querySelector('.film-list');

async function onSearchChange(event){
  const film = event.target.value
  const films = await fetch("https://ghibliapi.dev/films");
  const filmData = await films.json();
  filmListEl.innerHTML = filmData.map((film) => filmHTML(film)).join("");
}

function filmHTML(film) {

  return `<div class="film-card">
    <div class="film-card__container">
      <img class="film__img" src="${film.image}" alt="">
      <div class="film-info">
        <p><b>Directed by</b><br> ${ film.director}</p>
        <p><b>Released:</b><br> ${film.release_date}</p>
        <p><b>Runtime:</b><br> ${film.running_time}</p>
        <p><b>Rotten Tomatoes :</b><br> ${film.rt_score}</p>
      </div>
    <p><b>Synopsis:</b> ${film.description}<p>
    </div>
    </div>`
}