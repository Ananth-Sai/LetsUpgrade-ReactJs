import { useState } from "react";
import "./style.css";

const App = () => {
    
    let [score,setScore] = useState(0);
    
    return (
        <div>
            <h1 style = {{color:""}}>Counter Application</h1>
            <h2>Score: {score}</h2>
            <h3>Maximun Score: 25</h3>
            <p><u>RULES:</u></p>
            <span>Press the Increment button to Increase</span> <br></br>
            <span>Press the Increment button to Decrease</span> <br></br>
            <span>Press the Increment button to Reset</span> <br></br>

            <div className="btnctn">
                <button onClick={() => (score<25) ? setScore(score+1):(score===25)}>Increment</button>
                <button onClick={() => (score >0) ? setScore(score-1):(score===0)}>Decrement</button>
                <button onClick={() => (setScore(0))}>Reset</button>
            </div>
        </div>
    )
}

export default App;