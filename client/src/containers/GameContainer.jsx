import React from 'react'
import GameItem from '../components/GameItem'
import GuessRight from '../components/GuessRight'
import GuessWrong from '../components/GuessWrong'
import Board from './Board'
class GameContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {items: [
      {
        state: true,
        image: "http://www.straight.com/files/styles/popup/public/HarryPotter_131223.jpg",
        name: "Harry"
      },
      {
        state: false,
        image: "http://stuffpoint.com/harry-potter/image/442918-harry-potter-snape.jpg",
        name: "Snape"
      }
    ]}

  }
  render(){
    return(
      <div>
        <div className="board">
          <Board characters={this.state.items}/>
        </div>
        <div className="guess">

        </div>
      </div>
    )
  }
}

export default GameContainer
