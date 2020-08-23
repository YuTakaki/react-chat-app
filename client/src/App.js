import React, {Suspense} from 'react';
import io from 'socket.io-client';
import './styles/css/main.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Username = React.lazy(() => import('./component/addUsername'));
const Chat = React.lazy(() => import('./component/chat'));



const socket = io.connect('http://localhost:4000');


class App extends React.Component{
  state = {
    username : '',
    messages : [],
  }

  submit = (message) => {
    

    socket.emit('send', {
      sender : this.state.username,
      message
    });
    socket.on('send', (data) => {
      console.log(data);
      let className = 'receiver';
      if(data.id === socket.id){
        className = 'sender'
      }
      this.pushMessages(className, data);
      console.log(this.state);
    });
  };
  setUsername = (username) => {
    this.setState({
      username
    });
  };
  // componentDidUpdate(){
  //   console.log(this.state);
  // }
  pushMessages = (className, data) => {
    this.setState((state, props) => ({
      messages : [...state.messages, {
        className,
        sender : data.data.sender,
        message : data.data.message
      }]
    })); 
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps === this.props){
      return false
    }
    
  }
  socket(){
    
  }
  render(){
    
    this.socket();
    console.log('a')
    return(
      <div className='App'>
        <Suspense fallback ={<div></div>} >
          <Router>
            <Route exact path = '/' render={(props) => (<Username {...props} setUsername={this.setUsername} />)}/>
            <Route path = '/chat' render ={(props) => (<Chat {...props} submit={this.submit} state={this.state} />)} />

          </Router>
        </Suspense>
        

      </div>
    )
  }
}

// socket.on('send', (data) => {
//       console.log(data);
//       let className = 'receiver';
//       if(data.id === socket.id){
//         className = 'sender'
//       }
//       this.pushMessages(className, data);
//       console.log(this.state);
//     });

export default App;
