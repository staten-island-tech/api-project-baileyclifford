import { DOMSelectors } from "./DOM";
import { genres } from "genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.Value;
    const searchQuery = async function () {
        try{
            const response = await fetch(

            );
            const data = await response.json();
            data.results.forEach((song) => {
                let genreArr = [];
                const addGenre = function () {
                    genres.forEach((element) => {
                        if(song,genre_ids.includes(element.id)) {
                            genreArr.push(element.name);
                            return genreArr;
                        }
                    })
                }
            })
        }
    };
  });
};
