import React, { useState, useEffect} from "react";


function FetchYourData() {

const [data, setData] = useState()


let styleObject = {
    div: {
        backgroundColor:" green",
        color:"pink",
        border: "1px, solid red"
    }, h1:{
        color:"blue",
        border:"1px, solid blue"
    }
}
   
useEffect(() => {
fetch('http://localhost:3000/posts')
.then((res) => res.json())
.then((posts) => setData(posts.map(post =>{
    return( <div>
            <h1>{post.author}</h1>
            <p key={post.body} >{post.body}</p>
            </div>)}    
    )))
},[])    

    return(
        <div style={styleObject.div} >
            <h1 style={styleObject.h1} >/ All posts /</h1>
            {data}
        </div>
    )
}


export default FetchYourData