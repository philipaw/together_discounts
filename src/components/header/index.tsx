import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <div>
                {/* <img src="../../assets/icons/mstile-150x150.png" /> */}
                <h1>Saastco</h1>
            </div>
            <nav>
                <Link activeClassName={style.active} href="/learn-more">
                    Learn more
                </Link>
                <Link activeClassName={style.active} href="/blog">
                    Blog
                </Link>
            </nav>
        </header>
    );
};

export default Header;
