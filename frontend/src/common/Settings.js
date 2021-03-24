import React,{useState} from 'react'

function Settings({onSetColor,noteColor}){
    const [setting, setSetting] = useState(null)
    const onClickSettings = (setting) =>{
        switch(setting){
            case 'color':
                setSetting('color');
                break;
            default:
                setSetting(null);
        }
    }
    return (
        <div className="animate__animated animate__fadeInDown settings_pop_up">
            <div className="font-size-8" onClick={()=>{onClickSettings('color')}}>
                Change color
            </div>
            {setting ==='color' &&
                <input type="color" value={noteColor} onChange={onSetColor}/>
            }
        </div>
    )
}

export default Settings;