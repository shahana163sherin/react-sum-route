import { useState } from "react";
import { toast } from "react-toastify";


const Home = () =>{
    const products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Laptop", price: 1500 },
    { id: 3, name: "Headphones", price: 200 },
    { id: 4, name: "Smart Watch", price: 300 }
  ];
  const[cart,setCart]=useState(JSON.parse(localStorage.getItem("cart"))|| [])

  function AddToCart(product){
    const UpdatedCart=[...cart,product]
    setCart(UpdatedCart)
    localStorage.setItem("cart",JSON.stringify(UpdatedCart))
    
    // alert(`${product.name} added to cart`)
   toast.success(`${product.name} added to cart`);
    
  }
    return(
        <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
           
            {products.map((p)=>(
                <div key={p.id}
                 style={{
              border: "1px solid gray",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}>
                <h2>{p.name}</h2>
                <p>{p.price}</p>
                <button onClick={()=>AddToCart(p)}>AddToCart</button>
            </div>
            ))}
        </div>
    );


}
export default Home