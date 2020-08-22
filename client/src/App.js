import React from 'react';
import io from 'socket.io-client';
import './styles/css/main.css'


function App() {
  const socket = io.connect('http://localhost:4000');
  const submit = () => {
    const sender = document.querySelector('#sender');
    const message = document.querySelector('#message');

    socket.emit('send', {
      sender,
      message
    })

  }
  return (
    <div className="App">
      <div className="messages"></div>
      <div className="handles">
        <input type='text' id='sender' placeholder='sender'></input>
        <input type='text' id='message' placeholder='message'></input>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
