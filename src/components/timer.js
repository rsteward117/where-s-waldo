import React,{useState, useEffect} from 'react';
//import firebase from "../firebase/firebase"

function Timer (){
    const [time, setTime] = useState(0);
    useEffect(() => {
        if(time >= 0){
            setTimeout(() => setTime(time + 1), 1000)
        }
    })
    
    return(
        <div id="timer-container">
            <h2>Time:<span> </span>{time}</h2>
        </div>
    );
}

export default Timer;