import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import * as style from "./style.css";

const url = "";

export const EmailField: FunctionalComponent = () => {
    const [text, setText] = useState<string | undefined>(undefined);

    const onSubmit = async (): Promise<void> => {
        const res = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: text
            })
        });
        console.log({ res });
    };

    return (
        <div>
            <p class={style.button_header}>
                Deals will launch soon, sign up to stay in the loop
            </p>
            <div class={style.text_field}>
                <input
                    class={style.text_field_hint}
                    placeholder="Enter your email address"
                    type="text"
                    value={text}
                    onInput={(e): void => {
                        setText((e.target as HTMLInputElement).value);
                    }}
                />
            </div>
            <div class={style.submit_button}>
                <button
                    class={style.submit_button_text}
                    value="Let me know"
                    onClick={onSubmit}
                />
            </div>
        </div>
    );
};
