import React, { useState, useEffect }  from "react";


function Bored() {

function refresh() {
  window.location.reload(false)
}  
 
const styleObject = {
  h1:{
    fontFamily:"Areial",
    textAlign: "center",
  },
  p:{
    fontFamily: "Areial",
    textAlign: "center",
    fontSize: "30px",
    textDecoration: "underline"
  },
  button:{
    fontSize:"30px",
    border: "none",
    letterSpacing:"3px",
    background:"antiqueWhite",
    fontSize:"40px",
    fontFamily:"Areial",
    textDecoration:"underline"
  },
  div:{
    background:"antiqueWhite",
    width: "100vw",
    height:"100vh"
  }
}

const [data, setData] = useState() 

useEffect(() => {
  fetch("https://www.boredapi.com/api/activity")
  .then((res) => res.json())
  .then((data) => setData(data.activity))
},[])
  



    return(
      <div style={styleObject.div} >
      <h1 style={styleObject.h1} ><button onClick={refresh} style={styleObject.button} >Bored?</button></h1>
      <p style={styleObject.p} >{data}</p>
      
      </div>
    
    )
}


export default Bored