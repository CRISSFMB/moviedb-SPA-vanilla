import HomeScreen from "../page/HomeScreen";

const searchForm = async (e) => {
  e.preventDefault();

  console.log(e.target.search.value);
  const content = null || document.getElementById("content");
  content.innerHTML = await HomeScreen(e.target.search.value);
};

export default searchForm;
