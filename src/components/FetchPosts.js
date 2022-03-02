import React, {useEffect} from "react";


function FetchPosts() {

useEffect(() => {
    fetch(' http://localhost:3000/posts')
    .then((res) => res.json())
    .then((posts) => console.log(posts))
})

    return(
        <h1>FetchPosts</h1>
    )
}

export default FetchPosts