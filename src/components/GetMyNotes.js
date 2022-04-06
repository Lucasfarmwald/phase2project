import React, { useState, useEffect} from "react";


function GetMyNotes() {

const [notes, setNotes] = useState([])


let styleObject = {
    div: {
        backgroundColor:"antiqueWhite",
        color:"black",
        border: "solid black",
        textAlign: "center",
        width: "100vw",
        height:"fit-content"
    }, h1:{
        color:"black",
        fontFamily: "Areial",
        textDecoration: "underline",
        textAlign: "center",
        fontSize:"40px"
    },
    title:{
        fontSize: "25px",
        fontFamily: "Areial"
    },
    p:{
        fontSize: "18px",
        fontFamily: ""
    },
    div2:{
        width: "100vw",
        height: "100vw"
    }
}
   

useEffect(() => {
fetch('http://localhost:3000/posts')
.then((res) => res.json())
.then(data => setNotes(data))
},[])    

const newNotes = notes.map(note =>{ 
    return (
        <div style={styleObject.div}>
            <h1 style={styleObject.title}> Title : {note.title}</h1>
            <p style={styleObject.p}>{note.author}</p>
            <p>{note.body}</p>
        </div>
)})
    return(
        <div style={styleObject.div2} >
           <h1 style={styleObject.h1} >My notes</h1>
           <p>{newNotes}</p>
        </div>
    )
}


export default GetMyNotes