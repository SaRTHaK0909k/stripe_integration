import React, { useState } from 'react'

const Home = () => {

    const itemName = "FIREIMG";
    const itemPrice = 500;
    const [quantity,setQuantity] = useState(1);
    const [finalAmount,setfinalamount] = useState(itemPrice);

    const decrement = () =>{
        if(quantity<1){
            setQuantity(1)
            setfinalamount(itemPrice)
        }
        else if(quantity>1){
            setQuantity(quantity-1)
            setfinalamount(finalAmount-itemPrice)
        }
    }

    const checkout = async() =>{
        try{
            const res = await fetch("http://localhost:8000/checkout",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                },
                mode:"cors",
                body:JSON.stringify({
                    items:[{
                        id:10,
                        quantity:quantity,
                        price:itemPrice,
                        name:itemName
                    },
                ]
                })  
            }),
            const data = await res.json();
            window.location=data.url;

        }
        catch(error){
            console.log(error)
        }
    }

    const increment = () =>{
        setQuantity(quantity+1)
        setfinalamount(finalAmount+itemPrice)
    }


  return (
    <div>
      Home
    </div>
  )
}

export default Home
Home