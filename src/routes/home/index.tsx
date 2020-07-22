import { FunctionalComponent, h } from "preact";
import { Page2 } from "../page2/Page2";
import { Page3 } from "../page3/Page3";
import { Page4 } from "../page4/Page4";
import { Page5 } from "../page5/Page5";
import { SignUp } from "../signUp/SignUp";
import { Intro } from "../intro/Intro";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.wrapper}>
            <Intro />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <SignUp />
        </div>
    );
};

export default Home;
