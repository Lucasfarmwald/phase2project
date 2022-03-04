import React, { useState, useEffect} from "react";


function FetchYourData() {

const [data, setData] = useState()


let styleObject = {
    div: {
        backgroundColor:"antiqueWhite",
        color:"black",
        border: "solid black",
        textAlign: "center"
    }, h1:{
        color:"black",
        fontFamily: "Areial",
        textDecoration: "underline",
        textAlign: "center",
        
    },
    title:{
        fontSize: "25px",
        fontFamily: "Areial"
    }
}
   
useEffect(() => {
fetch('http://localhost:3000/posts')
.then((res) => res.json())
.then((posts) => setData(posts.map(post =>{
    return( <div>
            <h1>{post.author}</h1>
            <p style={styleObject.title} >{post.title}</p>
            <p key={post.body} >{post.body}</p>
            </div>)}    
    )))
},[])    

    return(
        <div style={styleObject.div} >
            <h1 style={styleObject.h1} >My notes</h1>
            {data}
        </div>
    )
}


export default FetchYourData