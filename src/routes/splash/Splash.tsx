import { FunctionalComponent, h } from "preact";
import { EmailField } from "../../components/form/EmailField";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const Splash: FunctionalComponent = () => (
    <div class={style.page1}>
        <div>
            <h1 class={style.info_slug1}>{COPY.PAGE_1.SLUG}</h1>
            <p class={style.info_body1}>{COPY.PAGE_1.BODY}</p>
        </div>
        <EmailField />
    </div>
);
