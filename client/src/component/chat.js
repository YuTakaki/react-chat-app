import React from 'react';

class Chat extends React.Component {
    
    submit = () => {
        const message = document.querySelector('#message').value;
        this.props.submit(message);
    }
    componentDidMount(){
        if(this.props.state.username === ''){
            this.props.history.push('/')
        }
    }
    shouldComponentUpdate() {
        return false;
      }
    
  render(){

    //   const {submit, state} = this.props;
    const messages = this.props.state.messages.map(msg=>{return(<p className={msg.className}>{msg.sender} : {msg.message}</p>)});
    console.log(this.props.state)
      
    return (
        <div className="App">
          <div className="messages">{messages}</div>
          <div className="handles">
            <input type='text' id='message' placeholder='message'></input>
            <button onClick={this.submit}>Submit</button>
          </div>
        </div>
      );
  };
}
export default Chat