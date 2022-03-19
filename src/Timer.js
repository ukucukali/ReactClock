import React from 'react';
import './Timer.css';
class Timer extends React.Component{
    constructor(props){
        super(props); //base constructor
        this.state={time: new Date() };
        //this.refreshClock=this.refreshClock.bind(this); // 2nd solution for reference problem with this keyword
    }
render()
{
    return <div className="Timer">
         {this.state.time.toLocaleTimeString()}
         </div>
}
refreshTimer(){
    this.setState(
        {time: new Date()}
        );
}
componentDidMount()
{
   this.timerId=setInterval(()=>this.refreshTimer(), 1000);
}
componentWillUnmount(){

   clearInterval(this.timerId);
}
};
export default Timer;