import React, {useEffect} from "react";
import './App.css';
import MainPage from "../mainPage/MainPage";

function App() {
    const [tasks,setTasks] = React.useState([]);

    useEffect(()=>{
        console.log(tasks)
    },[tasks])

    return (
    <div className="App">
      <MainPage tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
