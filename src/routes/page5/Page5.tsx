import { FunctionalComponent, h } from "preact";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const Page5: FunctionalComponent = () => (
    <div class={style.page5}>
        <div class={style.page5_col1}>
            <h1 class={style.info_slug5}>{COPY.PAGE_5.SLUG}</h1>
            <p class={style.info_body5}>{COPY.PAGE_5.BODY[0]}</p>
            <p class={style.info_body5}>{COPY.PAGE_5.BODY[0]}</p>
        </div>
        <div class={style.page5_col2}>
            <div class={style.page5_fill}></div>
        </div>
    </div>
);
