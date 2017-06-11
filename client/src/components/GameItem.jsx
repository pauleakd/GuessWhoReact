import React from 'react'
import Guess from '../containers/Guess'

class GameItem extends React.Component {
  render(){
    console.log(this.props.name)
    return(
      <div>
        <h4>{this.props.name}</h4>
        <img src={this.props.image}/>
        <button onClick={this.makeGuess.bind(this)}> Guess</button>
      </div>
    )
  }
  makeGuess(){
    if(this.props.selectedName === this.props.name){
      this.props.makeRightGuess()
    }
    else{
      this.props.makeWrongGuess()
    }
  }
}

export default GameItem
