import React, {useEffect, useState} from "react";

function SeeWhatOthers() {

const [data, setData] = useState([])

const styleObject = {
    p: {
        border: "dashed black",
        lineHeight: "20px",
        color: "black",
        textAlign: "center"
    },
    h1:{
        fontFamily: "Arial",
        textAlign: "center",
        textDecoration: "underline ",
        fontSize:"40px"

    },
    div:{
        background:"antiqueWhite",
        width: "100vw",
        height:"100vh"
    
    }
}

useEffect(() => {
    fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
    .then((res) => res.json())
    .then((data) => setData(data.map(data => {
        return <div style={styleObject.p} >
            
                <h1  >{data.representative}</h1> 
                <p  > Purchase amount : {data.amount} of : {data.asset_description}
                <br></br>
                transaction date : {data.transaction_date}
                </p>
                
                
           
        </div>
    })))
}, [])


    return(
        <div style={styleObject.div} >
        <h1 style={styleObject.h1} >House Stock Watch</h1>
        <ol>
            {data}
        </ol>

        </div>

    )
}


export default SeeWhatOthers