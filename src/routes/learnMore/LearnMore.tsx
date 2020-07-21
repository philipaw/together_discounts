import { FunctionalComponent, h } from "preact";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const LearnMore: FunctionalComponent = () => (
    <div class={style.page2}>
        <h1 class={style.info_slug2}>{COPY.PAGE_2.SLUG}</h1>
        <p class={style.info_body2}>{COPY.PAGE_2.BODY}</p>
    </div>
);
