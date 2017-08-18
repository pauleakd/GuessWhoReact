import React from 'react'

class Question extends React.component{
  constructor(props){
      super(props)
  }

  render(){
    return(
      <div>
        <selector>
          {this.props.questions.map(question) =>{
            return(
              <option>
                question
              </option>
            )
          }
        }

        </selector>

      </div>
    )
  }

}
