import React, {useState} from "react";



function Post() {

const [formData, setFormData] = useState({
    title:"",
    body:"",
    author:""
})

//const [title, setTitle] = useState("")
//const [body, setBody] = useState("")
//const [author, setAuthor] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch(' http://localhost:3000/posts', {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(formData)
    }).then(() => {console.log("new Blog added")})
}
 
    return(
        <div>
           <h1>Add your own poems!</h1>
            <form onSubmit={handleSubmit} >
                <input type='text' onChange={(e) => setFormData({...formData, author: e.target.value})} value={formData.author} id="Author" name="Author" placeholder="Add Name"></input>
                <input type="text" onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} id="Title" name="Title" placeholder="Add Title"></input>
                <textarea type='text' onChange={(e) => setFormData({...formData, body: e.target.value})} value={formData.body} id="Body" name="Body"   placeholder="Start Writing!"></textarea>
                <button type="submit" >Submit</button>
            </form>
            
        </div>
    )
}

export default Post