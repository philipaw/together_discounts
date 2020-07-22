import { FunctionalComponent, h } from "preact";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const Page2: FunctionalComponent = () => (
    <div class={style.page2}>
        <div class={style.page2_col1}>
            <div class={style.page2_fill}></div>
        </div>
        <div class={style.page2_col2}>
            <h1 class={style.info_slug2}>{COPY.PAGE_2.SLUG}</h1>
            <p class={style.info_body2}>{COPY.PAGE_2.BODY[0]}</p>
            <p class={style.info_body2}>{COPY.PAGE_2.BODY[1]}</p>
        </div>
    </div>
);
