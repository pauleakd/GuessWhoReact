import React from 'react'

class GameItem extends React.Component {
  render(){
    return(
      <div>
        <img src={this.props.image}/>
        <button onClick={this.guess.bind(this)}>Guess</button>
      </div>
    )
  }
  guess(){
    if(this.props.state === true){
      this.props.GuessRight()
    }
    else{
      this.props.GuessWrong()
    }
  }
}

export default GameItem
