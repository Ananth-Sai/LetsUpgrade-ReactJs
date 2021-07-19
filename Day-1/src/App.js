import React from 'react'
import './style.css'
import Button from "./Button"

const App = () => {
    return(
        <div>
            <h1 style={{textAlign:"center",color:"yellow",fontfamily:`'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`}}><u>Hello People</u></h1>
            <div className="btndiv">
                <Button buttonText="Button 1"/>
                <Button buttonText="Button 2"/>
                <Button buttonText="Button 3"/>
            </div>
        </div>
    )
}

export default App