import Styles from "./NewTaskFormStyles.module.css"
import UtilStyles from "../utils/UtilsStyles.module.css"
import {useEffect} from "react";
function NewTaskForm(props){
    const tasks = props.tasks
    const setTasks = props.setTasks

    useEffect(()=>{
        let today = new Date().toISOString().split('T')[0];
        document.getElementById("taskDate").setAttribute('min', today);
    })

    const addNewTask = (event) => {
        event.preventDefault()
        const taskName = document.getElementById("taskName").value;
        const taskDate = document.getElementById("taskDate").value;
        const isImportant = document.getElementById("importantCheckBox").checked;

        if(taskName.length > 0 && !isNaN(Date.parse(taskDate))) {
            let taskId = 0
            if (tasks.length > 0) taskId = tasks[tasks.length - 1].taskId + 1

            const newTask = JSON.stringify({
                "taskId": taskId,
                "taskName": taskName,
                "taskDate": taskDate,
                "isImportant": isImportant
            })

            setTasks(tasks.concat(JSON.parse(newTask)))
        }
        else{
            console.log("error")
        }
    }
    return(
        <form className={Styles.formMain}>
            <input id="taskName" type="text"/>
            <input id="taskDate" type="date"/>
            <div className={UtilStyles.flexRow}>
                <input className={Styles.importantCheckBox} id="importantCheckBox" type="checkbox"/>
                <label className={UtilStyles.inLineBlock} htmlFor="importantCheckBox">important</label>
            </div>
            <input type="submit"
                   onClick={event => addNewTask(event)}
            />
        </form>
    )
}

export default NewTaskForm;