import Events from "./event"

const Task = ({tasks, onDelete}) => {

    return (
        <>
        {tasks.map((task) => (
        <Events key={task.id} task={task} onDelete={onDelete}/>)
         )}
        </>

    )

}

export default Task 