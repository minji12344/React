// 2. 타이머
// 시작, 일시정지, 중지(초기화) 만들어서 초 세기
// interval을 사용해도 되고, per_hooks 사용해도 된다.

import React, {useEffect, useState} from "react";

function Timer(){
    const [startTime, setstartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalID;

        if(isRunning){
            setstartTime(performance.now() - elapsedTime * 1000);

            intervalID = setInterval(() => {
                const currentTime = performance.now();
                setElapsedTime(Math.floor((currentTime - startTime)/1000));
            },1000);
        }

        return() => {
            clearInterval(intervalID);
        };
    }, [isRunning]);

    const handlePlay = () => {
        if(!isRunning){
            setIsRunning(true);
            setstartTime(performance.now() - elapsedTime * 1000);
        }
    };

    const handlePause = () => {
    if(isRunning){
        setIsRunning(false);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setstartTime(0);
        setElapsedTime(0);

    };


    return(
        <>
            <div>시간 : {elapsedTime}초 </div>

            <button onClick={handlePlay}> ▶ </button>
            <button onClick={handlePause}> ∥ </button>
            <button onClick={handleReset}> ■ </button>
        </>
    )
}

export default Timer;