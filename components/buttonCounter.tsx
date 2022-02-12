import { useState } from "react";

import buttonStyles from '../styles/button.module.css';

const ButtonCounter: React.FC = () => {
    const [clickState, setClickState] = useState<number>(0);

    function clicked(): void {
        setClickState(clickState + 1);
    }

    return (
        <div>
            <h3 id={buttonStyles.counter}>{clickState}</h3>
            <button className={buttonStyles.btn} onClick={clicked}>Click Me!</button>
        </div>
    );
}

export default ButtonCounter;