import getDetails from "../utils/getDetails";
import getQuery from "../utils/getQuery";

const Description = async () => {
  const id = getQuery();

  const movieItemData = await getDetails(id);
  console.log(movieItemData);

  const baseUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

  const { title, overview: description, poster_path: path } = movieItemData;

  const view = `

        <h1>${title}</h1>
        <h2>${description}</h2>
        <img src="${baseUrl}${path}"/>
      
    `;

  return view;
};

export default Description;
