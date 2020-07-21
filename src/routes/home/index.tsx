import { FunctionalComponent, h } from "preact";
import { LearnMore } from "../learnMore/LearnMore";
import { SignUp } from "../signUp/SignUp";
import { Splash } from "../splash/Splash";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.wrapper}>
            <Splash />
            <LearnMore />
            <SignUp />
        </div>
    );
};

export default Home;
