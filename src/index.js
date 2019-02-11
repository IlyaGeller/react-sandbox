import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { longStackSupport } from "q";

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
          style={{ verticalAlign: "middle", display: "flex" }}
          onClick={() => this.handleClick()}
        >
          <div style={{ margin: "auto", color: "white" }}>
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      time: this.props.time
    };
  }
  render() {
    return (
      <div className="messageContainer">
        <div className="messageText">
          <span>{this.state.text}</span>
        </div>
        <div className="messageTime">{this.state.time}</div>
      </div>
    );
  }
}

const messages = [
  {
    text: "Hi, how are\n you?",
    time: "12:52"
  },
  {
    text: "Call me later",
    time: "12:53"
  },
  {
    text: "Fine, bye!",
    time: "12:54"
  }
];

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }
  render() {
    let messages = [];
    this.props.messages.forEach(message => {
      messages.push(<Message text={message.text} time={message.time} />);
    });
    return <div className="messageList">{messages}</div>;
  }
}

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  handleClick() {
    this.setState({ text: "" });
    document.getElementById("myInput").value = "";
    document.getElementById("myInput").focus();
  }
  render() {
    return (
      <div className="input-container">
        <input id="myInput" type="text" />
        <button id="sendBtn" onClick={() => this.handleClick()}>
          Send
        </button>
      </div>
    );
  }
}

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title };
  }
  render() {
    return <div className="title">{this.state.title}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: this.props.messages };
  }
  render() {
    return (
      <div className="app">
        <Title title="My App" />
        <MessageList messages={this.state.messages} />
        <UserInput />
      </div>
    );
  }
}
const element = <App messages={messages} />;
ReactDOM.render(element, document.getElementById("root"));

var myinput = document.getElementById("myInput");

myinput.addEventListener("keyup", ev => {
  ev.preventDefault();
  if (ev.keyCode === 13) {
    document.getElementById("sendBtn").click();
  }
});
