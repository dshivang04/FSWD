import React from "react";
import './Style.css';
function Mylist() {

    const products = [{
        id: "01",
        name: "Coffee",
        desc: "A COFFEE A DAY KEEPS THE DOCTOR AWAY.",
        price: 20,
    }, {
        id: "02",
        name: "Boost",
        desc: "Boost is the secret of our energy.",
        price: 20,
    }, {
        id: "03",
        name: "Tea",
        desc: "Kuch na ho toh ye chalega.",
        price: 20,
    }]

    return (
        <>{
            products.map((item) => {
                return (
                    <div class="card">
                        <h1>{item.name}</h1>
                        <p class="price">{item.price}</p>
                        <p>{item.desc}</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                )
            })
        }</>
    )
}

export default Mylist;