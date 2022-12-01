import Display from "./components/disply";
import Keyboard from "./components/keyboard";

import './assets/style.css';

function Calculator() {
    return ( 
        <>
            <div className="container">
                <div className="box column">
                    <div className="row header between">
                        <h3>Calculator</h3>
                        <button className="dispalyMode">dark</button>
                    </div>
                    <Display/>
                    <Keyboard/>
                </div>
            </div>
        </>
     );
}

export default Calculator;