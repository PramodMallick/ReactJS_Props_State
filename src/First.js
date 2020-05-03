import React, {Component} from 'react';
import OneAvatar from './Avatar';
import 'tachyons';

class First extends Component
{
    mydata = [];
    newArray = [];

    constructor(props)
    {
        super(props);
        // this.me = this;
        this.mydata = this.getData();
        this.state = {
            title:"Welcome to my blog, coming from state of the class"
        }
    }

    btnSubmit_onClick(){
        console.log ('button clicked')
        this.setState(
            {
                title: "State changed in click event"
            }
        )
    }

    getData()
    {
       return [
            {
                "id":1,
                "name": "Pramod",
                "work": "Software Programmer"
            },
            {
                "id":2,
                "name": "kumar",
                "work": "Software Programmer 1"
            },
            {
                "id":3,
                "name": "mallick",
                "work": "Software Programmer 2"
            },
            {
                "id":4,
                "name": "mamuni",
                "work": "Software Programmer 3"
            }
        ]
    };

    LoopingFunction(currentValueWhileLooping, theIndexifAny)
    {
        return <OneAvatar name= {currentValueWhileLooping.name} work={currentValueWhileLooping.work}/>
    }

 

    render()
    {
        // let mydata = this.getData();
        // console.log (mydata)

        let newArray = 
        this.mydata.map (
                this.LoopingFunction
        )
    
        // console.log('after map , new array will be')
        // console.log(newArray)

        return(

            <div>
                <h1 className="tc"> {this.state.title}</h1>

                {newArray}
 
                <button id="btnSubmit" className="br4" onClick={this.btnSubmit_onClick.bind(this)}> Click me !</button>

            </div>
        )
    }

}

export default First;