import { FunctionalComponent, h } from "preact";
import { FormField } from "../../components/form/formField";
import * as style from "./style.css";

export const SignUp: FunctionalComponent = () => (
    <div class={style.sign_up}>
        <FormField />
    </div>
);
