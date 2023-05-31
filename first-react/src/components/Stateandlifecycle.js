import React from 'react'
import ReactDOM from 'react-dom'

class Stateandlifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    componentDidMount(){
        this.timeId=setInterval(
            ()=>this.tick(),1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    tick(){
        this.setState({date:new Date()});
    }

    render(){
        return (<h1>{this.state.date.toString()}</h1>);
    }
}
ReactDOM.render(<Stateandlifecycle date={new Date()}/>,document.getElementById("root"));
export default Stateandlifecycle;