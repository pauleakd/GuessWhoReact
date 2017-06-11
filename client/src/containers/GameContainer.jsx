import React from 'react'
import GameItem from '../components/GameItem'
import GuessRight from '../components/GuessRight'
import GuessWrong from '../components/GuessWrong'
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
    ], index: 1, questions: {
      male: "Is it a male character",
      female: "Is it a female character",
      student: "It is a student character"
    }, won: false, madeGuess: false, selectedItemIndex: 1}
    this.makeRightGuess = this.makeRightGuess.bind(this)
    this.makeWrongGuess = this.makeWrongGuess.bind(this)
  }
  // componentDidMount(){
  //   const url="http://hp-api.herokuapp.com/api/characters"
  //   const request = new XMLHttpRequest()
  //   request.open('GET', url)
  //   request.addEventListener('load', ()=>{
  //     if(request.status!==200 ) return
  //     const jsonString = request.responseText
  //     const data = JSON.parse(jsonString)
  //     this.setState({
  //       items: data
  //     })
  //   })
  //   request.send()
  // }
  render(){
    console.log(this.state.items)
    return(
      <div>
        <div className="board">
          <Board characters={this.state.items} makeRightGuess={this.makeRightGuess}
            makeWrongGuess={this.makeWrongGuess}
             selectedName={this.state.items[this.state.selectedItemIndex].name}/>
        </div>
        <div className="guess">
          <Guess won={this.state.won} madeGuess={this.state.madeGuess}/>
        </div>
        <div>
          <Questions/>
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

}

export default GameContainer
