import React, { useState } from "react";
import Btn from "./Btn.js";

function ModeToggler() {
    const [darkModeOn, setDarkModeOn] = useState(true);
    const lightMode = <h1>Light mode</h1>;
    const darkMode = <h1>Dark mode</h1>;

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <Btn darkModeOn={darkModeOn} setDarkModeOn={setDarkModeOn} />
        </div>
    );
}

export default ModeToggler;