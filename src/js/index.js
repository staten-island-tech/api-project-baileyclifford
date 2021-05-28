import { DOMSelectors } from "./DOM.js";
import { genres } from "./genre";

const key = "5abf5331108fe97305b5c8a3b501789e";

let pageNumber = 0;
const query = async function (pageNumber) {
  const page = pageNumber;
  DOMSelectors.grid.innerHTML = "";
  try {
    const response = await fetch(
      `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&apikey=https://developer.musixmatch.com/activate/aa87805981fb1a20b593ad2c3bb8dc0d4cbf2e62=${page}`
    );

    const data = await response.json();
    data.forEach((games) => {
      let genreArr = [];
      const addGenre = function () {
        genres.forEach((element) => {
          if (music.genre_ids.includes(element.id)) {
            genresArr.push(element.name);
            return genreArr;
          }
        });
      };
      addGenre();

      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="games-card">
      <div class="games-card-front">
        <img
          src="${games.thumb}"
          alt=""
          class="poster"
        />
      </div>
      <div class="games-card-back">
        <h3 class="games-card-header">${games.title}</h3>
        <div class="price-box">
          <p class="price">Get it now for:$ ${games.salePrice}</p>
          <p class="price">Original Price:$ ${games.normalPrice}</p>
         
        </div>
        <div class="score-box">
          <p class="criticsTitle">Critics Ratings: ${games.metacriticScore}</p>
         
        </div>
        <div class="savings-box">
          <p class="savings">${Math.round(games.savings)}% off</p>
         
        </div>
        <div class="games-genres">
            From ${storesArr}
          </div>
      </div>
    </div> `
      );
    });
  } catch (error) {
    console.log(error);
    alert("Oops, something bad happened");
  }
};
query();

const nextPage = function () {
  DOMSelectors.next.addEventListener("click", function next() {
    pageNumber++;
    query(pageNumber);
  });
};
const previousPage = function () {
  DOMSelectors.previous.addEventListener("click", function previousbtn() {
    pageNumber--;
    query(pageNumber);
  });
};
nextPage();
previousPage();
