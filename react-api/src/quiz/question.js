import React, { Component } from 'react';

class Questions extends Component {

    shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    }

    jiggleAnswers(correct,incorrect){
        var temp = []
        temp.push('<span class=correct>' + correct + '</span>')

        var combined = temp.concat(incorrect)
        this.shuffle(combined)

        return (
            combined
        )
    }

    render() {   
        return (
            <div>
            <center><h1>Question List</h1></center>
            {this.props.theQuestions.map((question) => (
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{question.question}</h5>
                    {this.jiggleAnswers(question.correct_answer, question.incorrect_answers).map((ans)=>(
                        <h4
                        dangerouslySetInnerHTML={{
                          __html: ans
                        }}></h4>
                    ))}
                </div>
                </div> 
            ))}
            </div>
        ) 
    }
  
}


export default Questions