import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

export const FormField: FunctionalComponent = () => (
    <div>
        <p class={style.button_header}>
            Deals will launch soon, sign up to stay in the loop
        </p>
        <div class={style.text_field}>
            <p class={style.text_field_hint}>Enter your email address</p>
        </div>
        <div class={style.submit_button}>
            <p class={style.submit_button_text}>Let me know</p>
        </div>
    </div>
);
