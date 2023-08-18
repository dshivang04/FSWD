import React from "react";
import './Style.css';
function Mylist() {

    const products = [{
        id: "01",
        img: <img src={require('./coffee.jpg') } />,
        name: "Coffee",
        desc: "A COFFEE A DAY KEEPS THE DOCTOR AWAY.",
        price: 20,
    }, {
        id: "02",
        img: <img src={require('./boost.jpg') } />,
        name: "Boost",
        desc: "Boost is the secret of our energy.",
        price: 20,
    }, {
        id: "03",
        img: <img src={require('./tea.jpg') } />,
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
                        <image>{item.img}</image>
                        <p class="price">Rs. {item.price}</p>
                        <p>{item.desc}</p>
                        <p><button>Add to Cart</button></p>
                    </div>
                )
            })
        }</>
    )
}

export default Mylist;