import React from 'react'

class Questions extends React.Component {
  constructor(props){
    super(props)
    this.state = {answer: 'Ask a question'}
  }
  render(){
    return(
      <div>
        <form onSubmit={this.checkAnswer.bind(this)}>
          <select name='question'>
            {this.props.questions.map((question, index) =>{
              return(
                <option value={index}>
                  {question.text}
                </option>
              )
            })
          }
          </select>
          <input type='submit' value='Ask'/>
        </form>
        <div><p>{this.state.answer}</p></div>
      </div>
    )
  }
  checkAnswer(event){
    event.preventDefault()
    const index = event.target.question.value
    const question = this.props.questions[index]
    // console.log(this.props.selectedCharacter[question.type])
    if(this.props.selectedCharacter[question.type]=== question.specifics){
      this.setState({answer: ' YES'});
    }
    else{
      this.setState({answer: 'NO'})
    }
    console.log(event.target.question.value)

  }
}

export default Questions
