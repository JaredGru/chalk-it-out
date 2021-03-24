import React, { useState,useEffect } from 'react';
import './style.css'
import addButton from '../assets/add.svg'
import settingButton from '../assets/settings.svg'
import Settings from './Settings'
function Note({id}){
    const [tasks, setTasks] = useState([])
    const [openSettings, setOpenSettings] = useState(false)
    const [noteColor, setNoteColor] = useState('#FFFFFF')

    const addNewTask= ()=>{
        let newTask = {}
        if(tasks.length>0){
            newTask.id = parseInt(tasks[tasks.length-1].id)+1
        }else{
            newTask.id = 1;
        }
        newTask.text = '';
        newTask.checked = false;
        setTasks([...tasks,newTask])
    }
    
    const onChangeText=(event,index)=>{
      
        let newTasks =[...tasks]
        newTasks[index].text = event.target.value
        setTasks(newTasks)
    }

    const onChecked = (event,index) =>{
        let newTasks =[...tasks]
        newTasks[index].checked = !newTasks[index].checked
        setTasks(newTasks)
    }

    const onClickSetting = () =>{
        setOpenSettings(!openSettings)
    }

    const onSetColor = (color) =>{
        setNoteColor(color)
    }

    useEffect(() => {
        // console.log(tasks)
    }, [tasks])

    return (
        <div className="note" style={{'backgroundColor':noteColor}}>
            <div className="note-header">
                <img src={settingButton} onClick={onClickSetting} alt="settingButton" className="setting-button"></img>
                {openSettings &&
                    <Settings onSetColor={(event)=>onSetColor(event.target.value)} noteColor={noteColor}/>
                }
            </div>
            <div className="note-input-area">
               {tasks.map((task,index)=>(
                   <div key={task.id} className="d-flex align-items-center">
                       <input type="checkbox" disabled={task.text===''} onChange={(e)=>onChecked(e,index)}></input>
                        <input type="text" style={task.checked?{'text-decoration':'line-through'}:{}} id={`${id}taskInput${task.id}`} onChange={(e)=>onChangeText(e,index)}></input>
                    </div>
               ))}
            </div>
            <div className="new-task-button" onClick={addNewTask}>
                <span style={{flex:9}}>New Task</span>
                <img style={{flex:1}} src={addButton} className="note-add-button" alt="addButton"></img>
            </div>
        </div>
    )
}

export default Note