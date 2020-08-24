import React from 'react';

class Chat extends React.Component {
    
    submit = () => {
        let message = document.querySelector('#message');
        this.props.submit(message.value);
        this.props.state.messages.map((msg) => console.log(msg))
        message.value = '';
    }
    componentDidMount(){
        if(this.props.state.username === ''){
            this.props.history.push('/')
        }
    }
    
  render(){

    //   const {submit, state} = this.props;
    const messages = this.props.state.messages.map(msg=>(
      <p key={msg.message} className={msg.className}>{msg.sender} : {msg.message}</p>
      ));
    const isTyping = this.props.state.current !== '' ? (
      <p>{this.props.state.current}</p>

    ) : null
    
      
    return (
        <div className="App">
          <div className="messages">
            {messages}
            {isTyping}
          </div>
          <div className="handles">
            <input type='text' id='message' placeholder='message' onChange = {this.props.isTyping}></input>
            <button onClick={this.submit}>Submit</button>
          </div>
        </div>
      );
  };
}
export default Chat