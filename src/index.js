import React from "react";
import ReactDOM from "react-dom";

class ActionButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num:0,
            show: true
        }
    }
    tick(){
        const newnum = this.state.num + 1;
        this.setState({ num: newnum });
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    handleClick(){
        this.setState({ show: false });
        this.componentWillUnmount();
    }

    render() { 
        return ( 
            this.state.show ? (<button onClick={()=>this.handleClick()}>{this.state.num}</button>) : null
         );
    }
}
 
const element = <ActionButton/>;
ReactDOM.render(element, document.getElementById("root"));
