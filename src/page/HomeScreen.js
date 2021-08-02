import getData from "../utils/getData";

const HomeScreen = async () => {
  const { results: data } = await getData;
  const view = `
    <section class="search-section">
      <div class="container">
          <form class="search" id="form-search">
              <input type="text" placeholder="Search Movie" class="search__input" id="Search" autocomplete="off">
              <i class="fas fa-search"></i>
          </form>
      </div>
    </section>

    <div class="container">
        <section class="section-movies" id="spinner">
            <h3 class="text-center">Popular Movies </h3>
            <div class="card-wrapper">
              ${data.map((movie) => {
                const pathImg = "https://image.tmdb.org/t/p/w500";
                const {
                  id,
                  title,
                  vote_average: rating,
                  poster_path: img,
                } = movie;

                return `
                  <div class="card">
                    <div class="card__header">
                        <a href="#" class="card__header">
                            <img src=${pathImg}${img} alt=${title} class="card__img">
                        </a>
                    </div>
                    <div class="card__body">
                        <p class="card__title">${title}</p>
                        <div class="card__rating">
                            <i class="fas fa-star card__icon"></i>
                            <span class="card__text">${rating}</span>
                        </div>
                    </div>
                  </div>
                `;
              })}
            </div>
        </section>
    </div>`;

  return view;
};

export default HomeScreen;
