import React from 'react'
import Guess from '../containers/Guess'

class GameItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={flipped: false, image: this.props.image};
  }
  render(){
    return(
      <div className='gameItem'>
        <div> <h4 className='name'>{this.props.name}</h4>
        <img src={this.state.image} onClick = {this.flip.bind(this)}/></div>
        <button onClick={this.makeGuess.bind(this)}> Guess</button>
      </div>
    )
  }
  makeGuess(){
    if(this.props.name === this.props.selectedName){
      alert('you won the game!')
    }
    else{
      alert('Your guess was wrong! Try again.')
    }
  }
  flip(){
    console.log('flippin')
    if(this.state.flipped === false){
        this.setState({flipped: true})
        this.setState({image: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fpixabay.com%2Fstatic%2Fuploads%2Fphoto%2F2014%2F09%2F25%2F19%2F36%2Fquestion-mark-460864_960_720.png&f=1'})
    }
    else{
      this.setState({flipped: false})
      this.setState({image: this.props.image})
    }

  }
}

export default GameItem
