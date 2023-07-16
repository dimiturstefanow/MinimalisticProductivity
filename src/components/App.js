import "../styles/App.scss";
import StatusLine from "./StatusLine";
import {useState, useEffect} from "react";


function App(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        console.log("using effect")
    }, []);

    function addEmptyTask(status){
        ///
    }

    function addTask(taskToAdd){
        ///
    }

    function deleteTask(taskId){
        ///
    }

    function moveTask(id, newStatus){
        ///
    }

    function saveTasksToLocalStorage(tasks){
        ///
    }

    function loadTasksFromLocalStorage(){

    }

    return (
        <div 
        className="App"
        >
            <h1>Task Management</h1>
            <main>
                <section>
                <StatusLine 
                    tasks={tasks}
                    addEmptyTask={addEmptyTask}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    moveTask={moveTask}
                    status="Backlog"
                    />
                    <StatusLine 
                    tasks={tasks}
                    addEmptyTask={addEmptyTask}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    moveTask={moveTask}
                    status="In Progress"
                    />
                    <StatusLine 
                    tasks={tasks}
                    addEmptyTask={addEmptyTask}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    moveTask={moveTask}
                    status="Done"
                    />
                </section>
            </main>


        </div>
    )
}

export default App;