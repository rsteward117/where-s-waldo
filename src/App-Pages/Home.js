import React from "react";
import { useHistory } from "react-router-dom";
import home from "./home.css";
import Header from "../components/header";
import waldoFullBody from "../W-W-Characters/WaldoFullBody.jpg"
function Home(){
    let history = useHistory();
    function navagateToGame(){
        let path = './Game';
        history.push(path);
    }
    return(
        <div>
            <Header />
            <div className="home-Container">
                <div className="home-text-container">
                    <h2>Hello welcome to my where's waldo App</h2>
                    <p>You goal is to try to find this guy towards the right of your screen in an image,
                    but be warned he is not alone you will also have to find his friend too, 
                    and you will be timed to see how it takes to find them all. 
                    that should cover everything about this app so click the start button when ever you are ready.</p>
                </div>

                <div className="home-img-container">
                    <h2>Here's <span>Waldo</span>!</h2>
                    <img src={waldoFullBody} alt="Full body of waldo"></img>
                </div>
            </div>
            <div className="start-btn-container">
                    <button onClick={navagateToGame}>Start</button>
            </div>
        </div>
    )
}

export default Home;