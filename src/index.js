import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
    setTimeout(() => {
      this.setState({ clicked: !this.state.clicked });
    }, 500);
  }

  render() {
    return (
      <div className="squareContainer">
        <div
          className={this.state.clicked ? "squareClicked" : "square"}
          style={{verticalAlign:'middle',display:'flex'}}
          onClick={() => this.handleClick()}
        >
          <div style={{margin:'auto',color:'white'}}>{this.props.text}</div>
        </div>
      </div>
    );
  }
}


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text:this.props.text,
      time: this.props.time
     }
  }
  render() { 
    return ( 
      <div className="messageContainer">
        <div className="messageText"><span>{this.state.text}</span></div>
        <div className="messageTime">{this.state.time}</div>
      </div>
     );
  }
}
 
const messages =[
  {
    text:"Hi, how are you? Bla bla? Bla bla bla",
    time: "12:52"
  },
  {
    text:"Call me later",
    time: "12:53"
  },
  {
    text:"Fine, bye!",
    time: "12:54"
  }
];

class MessageList extends Component {
  render() {
    let messages = []; 
    this.props.messages.forEach(message => {
      messages.push(<Message text={message.text} time={message.time}/>)
    });
    return ( 
      <div className="messageList">
        {messages}
      </div>
     );
  }
}

const element = <div>
  <MessageList messages={messages} />
  <Square text="OK"/>
</div>
ReactDOM.render(element, document.getElementById("root"));
