import React from "react";

function Mylist() {

    const products=[{
        id: "01",
        name: "Coffee",
        desc: "A COFFEE A DAY KEEPS THE DOCTOR AWAY.",
        price: 20,
    },{
        id: "02",
        name: "Boost",
        desc: "Boost is the secret of our energy.",
        price: 20,
    },{
        id: "03",
        name: "Tea",
        desc: "Kuch na ho toh ye chalega.",
        price: 20,
    }]

    return (
        <>
            <div class="card">{
                    products.map((item) => {

                    })
                }
            </div>
        </>

    )
}

export default Mylist;