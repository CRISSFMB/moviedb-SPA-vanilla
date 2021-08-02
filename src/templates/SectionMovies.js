const SectionMovies = () => {
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
                            <div class="card">

                                <div class="card__header">
                                    <a href="#" class="card__header">
                                        <img src="" alt="" class="card__img">
                                    </a>
                                </div>
                                <div class="card__body">
                                    <p class="card__title"></p>
                                    <div class="card__rating">
                                        <i class="fas fa-star card__icon"></i>
                                        <span class="card__text"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>`;
    return view;
};