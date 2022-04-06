import React, {useEffect, useState} from "react";

function SeeWhatOthers() {

const [recentPurchases, setRecentPurchases] = useState([])

const styleObject = {
    p: {
        border: "dashed black",
        lineHeight: "20px",
        color: "black",
        textAlign: "center"
    },
    h1:{
        fontFamily: "Arial",
        textAlign: "center",
        textDecoration: "underline ",
        fontSize:"40px"

    },
    div:{
        background:"antiqueWhite",
        width: "100vw",
        height:"100vh"
    
    }
}

useEffect(() => {
    fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
    .then((res) => res.json())
    .then(data => setRecentPurchases(data))
},[])

const newRecentPurchase = recentPurchases.map(purchase => {
    return (
        <div style={styleObject.p} >
            <h1>{purchase.representative}</h1>
            <p> Purchase Amount: {purchase.amount} OF: {purchase.asset_description}
            <br></br>
            Transaction Date: {purchase.transaction_date}
            </p>
        </div>
    )
})


    return(
        <div style={styleObject.div} >
        <h1 style={styleObject.h1} >House Stock Watch</h1>
        <ol>{newRecentPurchase}</ol>
        </div>
    )
}


export default SeeWhatOthers