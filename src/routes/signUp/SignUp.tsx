import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import * as style from "./style.css";

export const SignUp: FunctionalComponent = () => {
    const [name, setName] = useState<string | undefined>(undefined);
    const [company, setCompany] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [whichProviders, setWhichProviders] = useState<string | undefined>(
        undefined
    );
    const [currentSpending, setCurrentSpending] = useState<string | undefined>(
        undefined
    );

    const onSubmit = (): void => {
        console.log("HI!");
    };

    return (
        <div class={style.sign_up}>
            <input
                type="text"
                value={name}
                placeholder="name"
                onInput={(e): void => {
                    setName((e.target as HTMLInputElement).value);
                }}
            />
            <input
                type="text"
                value={company}
                placeholder="company"
                onInput={(e): void => {
                    setCompany((e.target as HTMLInputElement).value);
                }}
            />
            <input
                type="text"
                value={email}
                placeholder="email"
                onInput={(e): void => {
                    setEmail((e.target as HTMLInputElement).value);
                }}
            />
            <input
                type="text"
                value={whichProviders}
                placeholder={
                    "Which SaaS providers would you like to save money on?"
                }
                onInput={(e): void => {
                    setWhichProviders((e.target as HTMLInputElement).value);
                }}
            />
            <input
                type="text"
                value={currentSpending}
                placeholder="How much are you currently spending?"
                onInput={(e): void => {
                    setCurrentSpending((e.target as HTMLInputElement).value);
                }}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};
