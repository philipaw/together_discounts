import { FunctionalComponent, h } from "preact";
import { COPY } from "../../constants/COPY";
import * as style from "./style.css";

export const Intro: FunctionalComponent = () => (
    <div class={style.page1}>
        <div class={style.page1_grid}>
            <div class={style.info}>
                <div>
                    <h1 class={style.info_slug1}>{COPY.PAGE_1.SLUG}</h1>
                    <p class={style.info_body1}>{COPY.PAGE_1.BODY[0]}</p>
                </div>
            </div>
            <div class={style.picture1}>
                {/* <div class={style.picture1_fill}></div> */}
                <image
                    class={style.picture1_fill}
                    src="../../assets/images/sampleIllustration1_600x600.jpg"
                />
            </div>
            <div class={style.notify_me}>
                <a href="#signup">Let me know</a>
            </div>
        </div>
    </div>
);
