import React, {useEffect} from "react";
import Styles from "./TasksRendererStyles.module.css"
import UtilStyles from "../utils/UtilsStyles.module.css"
function TasksRenderer(props){
    const tasks = props.tasks
    const setTasks = props.setTasks
    const [completedTasks, setCompletedTasks] = React.useState([])

    const closeTask = (taskId) => {
        const task = tasks.find(it => it.taskId === taskId).index
        const newCompletedTasks = completedTasks
        completedTasks.push(...tasks.splice(task,1))
        setCompletedTasks([...newCompletedTasks]);
        setTasks([...tasks])
    }

    return(
        <div className={UtilStyles.flexColumn}>
            <h1>TO DO</h1>
            <div className={Styles.tasksBox}>
            {tasks.map(task =>
                <div className={Styles.taskBox}>
                    <h4>{task.taskName}</h4>
                    <h4>{task.taskDate}</h4>
                    {task.isImportant &&
                        <h2 className={Styles.importantTask}>Important</h2>
                    }
                    <button id={task.taskId} onClick={event => closeTask(task.taskId)}>Ukończ</button>
                </div>
            )}
            </div>

            <h1>DONE</h1>
            <div className={Styles.tasksBox}>
                {completedTasks.map(task => <div className={Styles.taskBox}>
                    <h4>{task.taskName}</h4>
                    <h4>{task.taskDate}</h4>
                </div>
                )}
            </div>
        </div>
    )
}

export default TasksRenderer;