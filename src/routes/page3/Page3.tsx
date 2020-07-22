import { FunctionalComponent, h } from "preact";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const Page3: FunctionalComponent = () => {
    const listItems = COPY.PAGE_3.BODY[2];
    const safeListItems = Array.isArray(listItems) ? listItems : [];

    return (
        <div class={style.page3}>
            <div class={style.page3_col1}>
                <h1 class={style.info_slug3}>{COPY.PAGE_3.SLUG}</h1>
                <p class={style.info_body3}>{COPY.PAGE_3.BODY[0]}</p>
                <p class={style.info_body3_2}>{COPY.PAGE_3.BODY[1]}</p>
                <ol class={style.info_list3}>
                    {safeListItems.map((copywrite, i) => (
                        <li key={`page3-copywrite-${i}`}>{copywrite}</li>
                    ))}
                </ol>
            </div>
            <div class={style.page3_col2}>
                <div class={style.page3_fill}></div>
            </div>
        </div>
    );
};
