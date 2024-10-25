import React from "react";

let Onefun = (data) =>{
    console.log(data)
    return(
        <div>
            <p>{data.name}</p>
            <p>{data.rol}</p>
            <p>{data.obj.grade}</p>
            {
                data.arrobj.map((e,i) => {
                    return(
                        <div key={i}>
                            <p>{`subcode=${e.subcode}, sub=${e.sub}, grade=${e.grade}`}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}
export default Onefun