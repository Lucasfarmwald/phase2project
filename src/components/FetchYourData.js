import React, { useState, useEffect} from "react";


function FetchYourData() {

const [data, setData] = useState()
   
useEffect(() => {

    fetch('http://localhost:3000/posts')
    .then((res) => res.json())
    .then((posts) => setData(posts.map(post =>{
       return( <div>
           <h1 style={{color:'red'}} >{post.author}</h1>
           <p key={post.body} >{post.body}</p>
       </div>
                   
        )
    }
       
    )))
},[])    

    return(
        <div style={{background: 'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);'}} >
            <h1 style={{color:'blue'}} >/ All posts /</h1>
            {data}
        </div>
    )
}


export default FetchYourData