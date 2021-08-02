import logo from "../assets/images/logo.svg";

const Header = () => {
    const view = `
                <div class="container">
                    <nav>
                        <div class="navbar">
                            <div class="logo">
                                <i class="fas fa-ticket-alt logo__title"></i>
                                <span class="logo__name">SEARCH MOVIE</span>
                            </div>
                            <img src=${logo} class="navbar__img" alt="logo movie DB">
                        </div>
                    </nav>
                </div>
                <div class="hero">
                    <div class="hero__content container">
                        <h2 class="hero__content__title">Invasion: End of time</h2>
                        <p class="hero__content__description">After the arrival of the aliens, Yuliya must face them, being the only one who had previous contact with them. Can loyalty be made stronger than power by alien technology?
                        </p>
                    </div>
                </div>
`;
    return view;
};
export default Header;