const key = "b9ddfc9d41f7d2d3fc81bd6280d7db38";
const getData = async (value) => {
  const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${value}&include_adult=false`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Fetch Error", err);
  }
};

export default getData;
