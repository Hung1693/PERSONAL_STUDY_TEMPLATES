import React, { useState } from 'react';
import './ToggleStyle.css'

const Toggle = () => {
    //1. enable useState
    const [on, setOn] = useState(false);
    console.log(on);
    const toggle = () => {
        setOn(!on);
    }
    return (
        <div className={`toggle ${on ? 'active' : ''}`} onClick={toggle}>
            <div className={`spinner ${on ? 'spinner-active' : ''}`}>

            </div>
            
        </div>
    );
};

export default Toggle;