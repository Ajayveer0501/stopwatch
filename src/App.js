import './App.css';
import {useEffect, useState} from "react";

function App() {
const [isRunning, setIsRunning]=useState(false);
const[elapsedTime,setElapsedTime]=useState(0);

useEffect(()=>{
  let intervalId;
  if(isRunning){
    intervalId=setInterval(()=>{
      setElapsedTime((prevElapsedTime)=>prevElapsedTime+1)
    },1000)
  }
  else{
    clearInterval(intervalId)
  }
  return ()=>clearInterval(intervalId)
},[isRunning]);
const formatTime=(time)=>{
  //const days =Math.floor(time/3600)
  const minutes =Math.floor(time/60)
  const remainingSeonds =time%60
  //return `${days<10?"0":""}${days}:${minutes<10?"0":""}${minutes}:${remainingSeonds<10?"0":""}${remainingSeonds}`;
  //return `${minutes<10?"0":""}${minutes}:${remainingSeonds<10?"0":""}${remainingSeonds}`;
  return `${minutes}:${remainingSeonds<10?"0":""}${remainingSeonds}`;
};
const startStop=()=>{
  setIsRunning(!isRunning)
}
const reset=()=>{
  setIsRunning(false)
  setElapsedTime(0)
}
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{isRunning?"Stop":"Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
