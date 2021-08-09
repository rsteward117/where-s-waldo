import React, {useState, useEffect} from "react";
import game from "./game.css";
import Header from "../components/header";
import Timer from "../components/timer";
import beachLevel from "../W-W-Levels/Beach.jpg";
import TargetCharacters from "../components/targetcharacters";




function Game (){

    return(
        <div>
            <Header />
            <div className="game-board-container">
                <Timer />
                <div className="Level-container">
                    <img src={beachLevel} alt="A beach cartoon level of where's waldo"></img>
                </div>
                <div className="Your-Targets">
                    {TargetCharacters.map((imgSrc, index) => (<img src={imgSrc.src} key={index}/>))}
                </div>
            </div>
        </div>
    )

}
export default Game;