import React,{Component} from "react";
import Onefun from "./onefun";

class Funtoclass extends Component{
    render(){
        let name="Akshay"
        let rolnum= 22
        let obj={
            grade:"O"
        }
        let arrobj=[
            {
                subcode:1,
                sub:"English",
                grade:"O"
            },
            {
                subcode:2,
                sub:"Tamil",
                grade:"O"
            },
            {
                subcode:3,
                sub:"Math",
                grade:"O"
            },
            {
                subcode:4,
                sub:"Science",
                grade:"O"
            },
            {
                subcode:5,
                sub:"Social",
                grade:"O"
            }
        ]
        return(
            <div className="con">
              <Onefun name={name} rol={rolnum} obj={obj} arrobj={arrobj}/>
            </div>
        )
    }
}
export default Funtoclass