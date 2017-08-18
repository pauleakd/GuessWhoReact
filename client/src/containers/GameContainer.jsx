import React from 'react'
import GameItem from '../components/GameItem'
import Questions from './Questions'
import Guess from './Guess'
import Board from './Board'

class GameContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {items: [
      {
        image: "http://www.straight.com/files/styles/popup/public/HarryPotter_131223.jpg",
        name: "Harry"
      },
      {
        image: "http://stuffpoint.com/harry-potter/image/442918-harry-potter-snape.jpg",
        name: "Snape"
      }
    ],
     index: 1, questions: [{
       specifics: 'male', type: 'gender', text: 'is it a male character'
     },
     {specifics: 'true', type: 'hogwartsStudent', text: 'is it a student'}
    ],
     won: false,
      madeGuess: false,
     selectedItemIndex: 0}
    this.makeRightGuess = this.makeRightGuess.bind(this)
    this.makeWrongGuess = this.makeWrongGuess.bind(this)
  }
  componentWillMount(){
    const url="http://hp-api.herokuapp.com/api/characters"
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.addEventListener('load', ()=>{
      if(request.status!==200 ) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({
        items: data
      })
    })
    request.send();
  }
  render(){
  console.log(this.state.selectedName)
    return(
      <div className='main'>
        <div className='title'><h2>Welcome to GuessWho</h2></div>
        <div className="board">
          <Board characters={this.state.items} selectedItemIndex={this.state.selectedItemIndex}/>
        </div>
        <button onClick={this.newGame.bind(this)}>Play a new game</button>
        <div className="guess">
          <Guess won={this.state.won} madeGuess={this.state.madeGuess}/>
        </div>
        <div>
          <Questions questions={this.state.questions} selectedCharacter={this.state.items[this.state.selectedItemIndex]}/>
        </div>
      </div>
    )
  }

  makeRightGuess(characterKey){

      this.setState({won: true})
      this.setState({madeGuess: true})
  }

  makeWrongGuess(characterKey){

      this.setState({won: false})
      this.setState({madeGuess: true})
  }

  newGame(){
    this.setState({selectedItemIndex:  Math.floor((Math.random() * 10) + 1) });
    this.setState({madeGuess: false})
    this.setState({won: false})
  }

}

export default GameContainer
