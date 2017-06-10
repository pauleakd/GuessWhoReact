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
    if(this.props.status === true){
      this.props.guessRight()
    }
    else{
      this.props.guessWrong()
    }
  }
}

export default GameItem
