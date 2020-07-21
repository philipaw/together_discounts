import { FunctionalComponent, h } from "preact";
import { EmailField } from "../../components/form/EmailField";
import * as style from "./style.css";

export const SignUp: FunctionalComponent = () => (
    <div class={style.sign_up}>
        <EmailField />
    </div>
);
