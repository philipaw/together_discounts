import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <div class={style.header_logo}>
                <img
                    // class={style.headern}
                    src="../../assets/icons/mstile-150x150.png"
                />
                <h1>Together Discount</h1>
            </div>
        </header>
    );
};

export default Header;
