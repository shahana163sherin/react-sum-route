import { useEffect, useState } from "react";


const Cart = () =>{
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const storedCart=JSON.parse(localStorage.getItem("cart")) || []
        setCart(storedCart)
    },[])
    const remove = (id)=>{
        const removeCart=cart.filter((c)=>c.id !== id)
        setCart(removeCart)
        localStorage.setItem("cart",JSON.stringify(removeCart))
        

    }
    const total= cart.reduce((sum,p)=> sum + p.price ,0)
    return(
        <div>
        <div style={{display:"flex", flexWrap:"wrap" ,gap:"30px"}}>
            <h2>My Cart....</h2>
            {cart.length === 0 ?
            (<h2>No items in cart</h2>):(<>
             {cart.map((item)=><div key={item.id}
             style={{
              border: "1px solid gray",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}><h2>{item.name}</h2>
            <p>{item.price}</p>
            <button onClick={()=>remove(item.id)}>Remove</button>

             </div>)}
            
            </>
            )

           
           }
            
        </div>
        <h2 style={{display:"flex", justifyContent:"center"}}>{total}</h2>
        </div>
    );

}
export default Cart