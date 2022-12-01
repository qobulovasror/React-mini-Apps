import Display from "./components/disply";
import Keyboard from "./components/keyboard";

import './assets/style.css';

function Calculator() {
    return ( 
        <>
            <div className="container">
                <div className="box column">
                    {/* <div className="end">dark</div> */}
                    <Display/>
                    <Keyboard/>
                </div>
            </div>
        </>
     );
}

export default Calculator;