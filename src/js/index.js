const key = "5abf5331108fe97305b5c8a3b501789e";

const query = async function () {
  try {
    const response = await fetch(
      "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&apikey=https://developer.musixmatch.com/activate/aa87805981fb1a20b593ad2c3bb8dc0d4cbf2e62"
    );
    const data = await response.json();
    data.results.forEach((lyrics) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend");
    });
    console.log(data.results);
  } catch {}
};
query();
