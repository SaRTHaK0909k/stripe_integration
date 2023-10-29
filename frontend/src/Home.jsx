import React, { useState } from 'react';

const Home = () => {
    const itemName = "FIREIMG";
    const itemPrice = 500;
    const [quantity, setQuantity] = useState(1);
    const [finalAmount, setFinalAmount] = useState(itemPrice);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setFinalAmount(finalAmount - itemPrice);
        }
    }

    const checkout = async () => {
        try {
            const res = await fetch("http://localhost:8000/checkout", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    items: [{
                        id: 10,
                        quantity: quantity,
                        price: itemPrice,
                        name: itemName
                    }]
                })
            });
            const data = await res.json();
            window.location.href = data.url;
        } catch (error) {
            console.log(error);
        }
    }
    
    const increment = () => {
        setQuantity(quantity + 1);
        setFinalAmount(finalAmount + itemPrice);
    }

    return (
        <div>
            <img src="https://sc04.alicdn.com/kf/H18eea47e26534b3ca1d11b41714055baT.jpg" alt="phone" />
            <div>
                <button onClick={decrement}>Decrement</button>
                <span>{quantity}</span>
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <p>Total Amount: {finalAmount}</p>
                <button onClick={checkout}>Checkout</button>
            </div>
        </div>
    );
}

export default Home;
