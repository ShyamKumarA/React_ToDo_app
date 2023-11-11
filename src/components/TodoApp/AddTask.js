import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const[values,setValues]=useState("");
    const addItem=()=>{
        addTask(values)
        setValues("")
    }

  return (
    <>
        <div className='input-container'>
            <input className='input' placeholder='Add a new task' value={values} type="text"
            onChange={(e)=>{setValues(e.target.value );}}
            />
            <button onClick={addItem} className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask