import React from "react";



let Child = (data) => {
    console.log(data)
    return (
        <div>
            <p>{data.word}</p>
            <p>{data.num}</p>
            <p>{data.obj.color}</p>
            <p>{data.arrobj[1].color}</p>

            {
                data.arrobj.map((e,i) => {
                    return(

                        <div key={i}>

                            <p>{`id=${e.id}, name=${e.color}, count= ${e.count}`}</p>
                            
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Child