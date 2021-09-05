const key = "b9ddfc9d41f7d2d3fc81bd6280d7db38";
const getDetails = async (id = 320288) => {
  const ApiDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;

  try {
    const response = await fetch(ApiDetail);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log("Fetch Error", err);
  }
};

export default getDetails;
