import React from 'react'

class Guess extends React.Component {
  render(){
    if(this.props.won === true){
    return(
      <div>
      You won the game!
      </div>
    )
  }
  else if(this.props.madeGuess === true){
    return(
      <div>
        Sorry Your Guess was wrong!
      </div>
    )
  }
    else{
      return(
        <div>
          Keep playing!
        </div>
      )
    }
  }
}

export default Guess
