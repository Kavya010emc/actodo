import AddTodoForm from "./Todoform"
<<<<<<< HEAD
import Todolist from "./Todolist"
=======
import TodoList from "./TodoList";
>>>>>>> eacc89bc28f09532e8802dc320bb5c3822bcb6ec
import { useState } from "react"

function TodoContainer()
{
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm  activityArr={activityArr} setActivityArr={setActivityArr}/>
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default TodoContainer