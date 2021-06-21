import React, { Component } from 'react';
import PopUpTable from './PopUpTable'

class MoveCircle extends Component {
  state = { 
    count:0,
    stopAnimation:false,
    showPopUpTable:false,
    pauseItem:false
   }
  
    handelMoveItem = (e) =>{
    const box = e.target
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({count:this.state.count +1 })
    this.setState({stopAnimation:false})
    this.setState({stopAnimation:true })
    this.setState({ pauseItem:false })
    this.setState({showPopUpTable:false })
    // box.classList.add('moveItem')
    box.style.backgroundColor = "#" + randomColor;
   
  }
  handelStopAnimation = (e) =>{
    this.setState({stopAnimation:false})
    this.setState({showPopUpTable:true})
    //  e.target.classList.remove('moveItem')
   }
    handelPauseItem = (e) =>{
      this.setState({pauseItem:true})
      //  e.target.classList.add('pauseItem')
  
     }
  render() { 
    return ( 
      <div>
         <div >
           {this.state.showPopUpTable &&  <PopUpTable count={this.state.count}/>}
       </div>
       <div className={`item ${this.state.stopAnimation && "moveItem"} || ${!this.state.stopAnimation && "" } ||
                       ${this.state.pauseItem && "pauseItem"}
                       `} 
                       onClick={this.handelMoveItem} onMouseOver={this.handelPauseItem }
                      onAnimationEnd={this.handelStopAnimation}
                              >
        <p className="count"> {this.state.count} </p>
      </div>
    
    </div>
     );
  }
}
 
export default MoveCircle;