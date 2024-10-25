import React,{Component} from "react";
 
class Twoclass extends Component{
    render(){
        console.log(this.props)
        let word =this.props
        return(
            <div className="con">
                <p>{word.name}</p>
                {
                    word.arrobj.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{`subcode:${e.subcode} sub:${e.sub} grade:${e.grade}`}</p>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default Twoclass