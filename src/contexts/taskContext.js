import { createContext, useState } from "react";

export const TaskContext=createContext();
export const TaskProvider=(porps)=>{
    const[tasks,setTasks]=useState([
    {
        title:'Shop',
        description:'Buy bread, milk',
        image:'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
        isDone:false
    }
]);
return(
    <TaskContext.Provider value={[tasks, setTasks]}>
        {porps.children}
    </TaskContext.Provider>
)
}