import React, {useState} from "react";



function AddNotes() {

const [formData, setFormData] = useState({
    title:"",
    body:"",
    author:""
})

const styleObject = {
    div:{
        background: "antiqueWhite",
        color: "black",
        width: "100vw",
        height:"100vh"
    },
    h1:{
        color: "black",
        textAlign: "center",
        fontFamily: "Areial",
        textDecoration: "underline",
        fontSize:"40px"
    }
}

function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch(' http://localhost:3000/posts', {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(formData)
    }).then(() => {alert("new Blog added")})
}
 
    return(
        <div style={styleObject.div} >
           <h1 style={styleObject.h1} >Add notes!</h1>
            <form onSubmit={handleSubmit} >
                <input type='text' onChange={(e) => setFormData({...formData, author: e.target.value})} value={formData.author} id="Author" name="Author" placeholder="Add Name"></input>
                <input type="text" onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} id="Title" name="Title" placeholder="Add Title"></input>
                <input type='text' onChange={(e) => setFormData({...formData, body: e.target.value})} value={formData.body} id="Body" name="Body"   placeholder="Start Writing!"></input>
                <button type="submit" >Submit</button>
            </form>
            
        </div>
    )
}

export default AddNotes