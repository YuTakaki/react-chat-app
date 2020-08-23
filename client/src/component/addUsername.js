import React from 'react';

const UsernameForm = (props) => {
    const {setUsername} = props;
    const submit = () => {
        const input = document.querySelector('input[type=text').value;
        setUsername(input);
        props.history.push('/chat');
    }
    return(
        <div>
            <input type='text' placeholder='Enter username' required/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}
export default UsernameForm