import React, { useEffect } from "react";


function DogPic() {

useEffect(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => console.log(data))
})

    return(
      <h1>Dog </h1>
    )
}


export default DogPic;