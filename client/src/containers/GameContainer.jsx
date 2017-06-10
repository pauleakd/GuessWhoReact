import React from 'react'
import GameItem from '../components/GameItem'
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
    this.characters = this.state.items.map((item)=> {
      return (
        <GameItem state={item.state} image={item.image} key={item.name}/>
      )
    })
  }
  render(){
    return(
      <div>
        {this.characters}
      </div>
    )
  }
}

export default GameContainer
