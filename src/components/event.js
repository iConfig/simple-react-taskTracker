import { FaTimes } from 'react-icons/fa'

// event js to delete tasks
const Events = ({task, onDelete}) => {
    return (
        <div className="event">
            <h4>{task.text} 
            <span className='icon'>
                 <FaTimes  
                 onClick= {() => onDelete(task.id) }/></span>
            </h4>
            <p>{task.date}</p>
        </div>
    )

}

export default Events