import { FunctionalComponent, h } from "preact";
import { COPY } from "./COPY";
import * as style from "./style.css";
import { FormField } from "../../components/form/formField";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.wrapper}>
            <div class={style.page1}>
                <div>
                    <h1 class={style.info_slug1}>{COPY.PAGE_1.SLUG}</h1>
                    <p class={style.info_body2}>{COPY.PAGE_1.BODY}</p>
                </div>
                <FormField />
            </div>
            <div class={style.page2}>
                <h1 class={style.info_slug2}>{COPY.PAGE_2.SLUG}</h1>
                <p class={style.info_body2}>{COPY.PAGE_2.BODY}</p>
            </div>
        </div>
    );
};

export default Home;
