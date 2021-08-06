import React, {useState, useEffect} from "react";
import home from "./home.css";
import Header from "../components/header";
import Timer from "../components/timer";
import beachLevel from "../W-W-Levels/Beach.jpg"

function Game (){




    return(
        <div>
            <Header />
            <div className="game-board-container">
                <Timer />
                <div className="Your-Targets">

                </div>
                <div className="Level-container">
                    <img src={beachLevel} alt="A beach cartoon level of where's waldo"></img>
                </div>
            </div>
        </div>
    )

}
export default Game;