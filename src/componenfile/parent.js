import React,{ Component } from "react";
import Child from "./child.js";

class Demo extends Component{
    render(){
        let a = "name"
        let num = 20
        let obj = {
            color:"red"
        }
        let arrobj = [
        {
            id:1,
            color:"red",
            count:1
        },
        {
            id:2,
            color:"Green",
            count:2
        },
        {
            id:3,
            color:"Blue",
            count:3
        }
    ]
        return(
           <div className='con'>
                <Child word={a} num={num} obj= {obj} arrobj={arrobj}/>  
            </div>
        )
    }
}

export default Demo