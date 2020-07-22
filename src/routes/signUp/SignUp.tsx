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
        <div id="signup" class={style.sign_up}>
            <div class={style.sign_up_slug}>Join our waitlist</div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                value={name}
                name="name"
                onInput={(e): void => {
                    setName((e.target as HTMLInputElement).value);
                }}
            />
            <label htmlFor="company">Company</label>
            <input
                type="text"
                value={company}
                name="company"
                onInput={(e): void => {
                    setCompany((e.target as HTMLInputElement).value);
                }}
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                value={email}
                name="email"
                onInput={(e): void => {
                    setEmail((e.target as HTMLInputElement).value);
                }}
            />
            <label htmlFor="whichProvider">
                Which SaaS providers would you like to save money on?
            </label>
            <textarea
                value={whichProviders}
                name={"whichProvider"}
                cols={33}
                rows={8}
                onInput={(e): void => {
                    setWhichProviders((e.target as HTMLInputElement).value);
                }}
            />
            <label htmlFor="currentSpending">
                How much are you currently spending?
            </label>
            <input
                type="text"
                value={currentSpending}
                name="currentSpending"
                onInput={(e): void => {
                    setCurrentSpending((e.target as HTMLInputElement).value);
                }}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};
