import React from 'react'
import GameItem from '../components/GameItem'
import GuessRight from '../components/GuessRight'
import GuessWrong from '../components/GuessWrong'

class Board extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.characters)
    this.gameItems = this.props.characters.map((item)=> {
      return (
        <GameItem makeWrongGuess={this.props.makeWrongGuess}
           makeRightGuess={this.props.makeRightGuess}
           image={item.image} name={item.name} selectedName={this.props.selectedName} key={item.name} makeGuess={this.props.makeGuess}/>
      )}
    )
  }
  render(){
    return(
      <div>
        {this.gameItems}
      </div>
    )
  }
}

export default Board
