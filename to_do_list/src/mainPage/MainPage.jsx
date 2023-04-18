import NewTaskForm from "../newTaskForm/NewTaskForm";
import TasksRenderer from "../tasksRenderer/TasksRenderer";

function MainPage(props){
    const tasks = props.tasks
    const setTasks = props.setTasks

    return(
        <div>
            <NewTaskForm tasks={tasks} setTasks={setTasks}/>
            <TasksRenderer tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default MainPage;