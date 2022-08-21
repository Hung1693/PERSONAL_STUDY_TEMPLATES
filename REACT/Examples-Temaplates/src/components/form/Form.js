import React from 'react';
import { useState } from 'react';
//2 ways binding
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = () => {}
    console.log({
            name, email
        });
    return (
        <div className='form'>
            <input
                /**Show input everytime code changed */
                value={name}
                /**each time value in input changed, value updates to name. event.target,value to access input */
                onChange={event => setName(event.target.value)}
            ></input>
            <input
                /**Show input everytime code changed */
                value={email}
                /**each time value in input changed, value updates to name. event.target,value to access input */
                onChange={event => setEmail(event.target.value)}
            ></input>
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
};

export default Form;