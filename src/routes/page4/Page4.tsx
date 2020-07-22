import { FunctionalComponent, h } from "preact";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const Page4: FunctionalComponent = () => (
    <div class={style.page4}>
        <div class={style.page4_col1}>
            <div class={style.page4_fill}></div>
        </div>
        <div class={style.page4_col2}>
            <h1 class={style.info_slug4}>{COPY.PAGE_4.SLUG}</h1>
            <p class={style.info_body4}>{COPY.PAGE_4.BODY[0]}</p>
            <p class={style.info_body4}>{COPY.PAGE_4.BODY[1]}</p>
            <p class={style.info_body4}>{COPY.PAGE_4.BODY[2]}</p>
        </div>
    </div>
);
