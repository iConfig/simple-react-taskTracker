import Header from "./components/Header";
import Task from "./components/task";
import { useState } from "react"

function App() {

//adding tasks 
  const [tasks, addTasks] = useState ([
    {
        id: 1,
        text: "Meet the doctor",
        date: "12/12/2022",
        reminder: true,
    },
    {
        id: 2,
        text: "Go to the Gym",
        date: "13/12/2022",
        reminder: true,
    },
    {
        id: 3,
        text: "Complete the app",
        date: "14/12/2022",
        reminder: true,
    },
    {
        id: 4,
        text: "Go see your family",
        date: "15/12/2022",
        reminder: true,
    }
]
)
// delete task
const deleteTask = (id) => {
  addTasks(tasks.filter((task) => task.id !== id ))
}

  return (
    <div className="container">
      <Header />
      
      {tasks.length > 0 ? ( 
      <Task  tasks={tasks} onDelete={deleteTask}  /> 
      ) : (
        "No task to display"
      )
    }
    </div>
  );
}

export default App;
