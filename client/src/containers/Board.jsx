import React from 'react'
import GameItem from '../components/GameItem'
// import classes from './style.css';

class Board extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.characters[this.props.selectedItemIndex].name)
    return(
      <div>
        {this.props.characters.map((item)=> {
          return (
            <GameItem className='gameItem'
               image={item.image} name={item.name}
               key={item.name} selectedName={this.props.characters[this.props.selectedItemIndex].name}/>
            )}
          )}
      </div>)
  }
}

export default Board
