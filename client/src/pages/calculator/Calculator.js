import {useState} from 'react';
import Display from "./components/disply";
import Keyboard from "./components/keyboard";

import './assets/style.css';

function Calculator() {
    const [issue, setIssue] = useState(""); 
    return ( 
        <>
            <div className="container">
                <div className="box column">
                    <div className="row header between">
                        <h3>Calculator</h3>
                        <button className="displyMode">dark</button>
                    </div>
                    <Display 
                        issue={issue}
                        setIssue={setIssue}
                    />
                    <Keyboard
                        issue={issue}
                        setIssue={setIssue}
                    />
                </div>
            </div>
        </>
     );
}

export default Calculator;