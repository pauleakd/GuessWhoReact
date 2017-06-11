import React from 'react'
import GameItem from '../components/GameItem'
import GuessRight from '../components/GuessRight'
import GuessWrong from '../components/GuessWrong'

class Board extends React.Component{
  constructor(props){
    super(props)
    this.gameItems = this.props.characters.map((item)=> {
      return (
        <GameItem state={item.state} image={item.image} key={item.name} GuessRight={GuessRight} GuessWrong={GuessWrong}/>
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
