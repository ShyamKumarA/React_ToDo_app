import React from 'react'

const ListTask = ({task,deleteTask,index}) => {
    
  return (
    <>
        <div className='list-tasks'>
            {task.title}
            <button onClick={()=>deleteTask(index)} className='delete-btn'>Delete</button>
        </div>
    </>
  )
}

export default ListTask