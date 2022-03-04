
import React, { useState, useEffect} from "react";

function Home() {

const [data, setData] = useState([])

const styleObject = {
    div: {
        lineSpacing: "50px",
        border: "solid black",
        color:'black',
        background: "antiqueWhite",
        fontSize: "20px",
        textAlign: "center"
    },
     h1:{
         textAlign: "center",
         fontFamily: "Areial",
         background: "antiqueWhite",
         color: "black",
         letterSpacing: "4px",
         fontSize: "40px",
         textDecoration: "underline "

     },
     div2: {
         background:"antiqueWhite"
     }
}

useEffect(() => {
    fetch('https://api.wazirx.com/sapi/v1/tickers/24hr')
    .then((res) => res.json())
    .then((items) => setData(items.map(item => {
        return (
        <div style={styleObject.div} >
            <p>{item.baseAsset} : Bid Price:  {item.bidPrice}   Lowest Price: {item.lowPrice}</p>
            <br></br>
            <p> Highest Price : {item.highPrice}</p>
        </div>
        )
    })))
},[])

    return(
        <div style={styleObject.div2} >
            <h1 style={styleObject.h1} >Crypto</h1>
            {data}
        </div>
    )
}

export default Home