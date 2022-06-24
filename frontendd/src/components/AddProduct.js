import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"


function AddProduct() {
    const[Name,setName]=useState("");
    const[Brand,setBrand]=useState("");
    const[Color,setColor]=useState("");
    const[Ram,setRam]=useState("");
    const[Price,setPrice]=useState("");



    const Navigate=useNavigate();

  // useEffect(()=>
  // {
  //   console.log(String.fromCharCode(97));
  // })


const getName=(event)=>
   {
     setName(event.target.value);

   }


   const getBrand=(event)=>
   {
    setBrand(event.target.value);
    
   }

   const getColor=(event)=>
   {

    setColor(event.target.value);
   }
   const getRam=(event)=>
   {
    setRam(event.target.value);
    
   }

   const getPrice=(event)=>
   {

    setPrice(event.target.value);
   }

 const addproduc=async (event)=>
{

  if(Name && Brand && Color && Ram && Price)
  {

 

  event.preventDefault();
  let result=await fetch("http://localhost:5000/addproduct",{
    method:"post",
    body:JSON.stringify({Name,Brand,Color,Ram,Price}),
    headers:{
        "Content-Type":"application/json"
    
    },
});
result=await result.json()

console.log(result);

setName("");
setColor("");
setBrand("");
setRam("");
setPrice("");

alert("Product saved!!!");
Navigate("/ShowProduct")




  }
  else
  {
    event.preventDefault();

    alert("please fill all fields!!!");


    
  }
 
 

}

  


  


  return (
    <>
      <div className="container">
        <form className="container">
          <div className="form-group my-5  ">
            <label for="exampleInputEmail1">Name</label>
            <input
            value={Name}
            onChange={getName}
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
            { (!Name) && <div><h6 className="text-danger float-left ">please enter value here</h6></div>}
          </div>
          <div className="form-group my-5 ">
            <label for="exampleInputPassword1">Brand</label>
            <input
            value={Brand}
            onChange={getBrand}
              type="brand"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter brand"
            />
        { (!Brand) && <div><h6 className="text-danger float-left ">please enter value here</h6></div>}
            
          </div>
          <div className="form-group my-5 ">
            <label for="exampleInputPassword1">Color</label>
            <input
            value={Color}
            onChange={getColor}
              type="brand"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="enter color"
            />
             { (!Color) && <div><h6 className="text-danger float-left ">please enter value here</h6></div>}
            
          </div>
          <div className="form-group my-5 ">
            <label for="exampleInputPassword1">Ram</label>
            <input
            value={Ram}
            onChange={getRam}
              type="Ram"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="enter Ram"
            />
              { (!Ram) && <div><h6 className="text-danger float-left ">please enter value here</h6></div>}
            
          </div>
          <div className="form-group my-5 ">
            <label for="exampleInputPassword1">Price</label>
            <input
            value={Price}
            onChange={getPrice}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="enter price"
            />
              { (!Price) && <div><h6 className="text-danger float-left ">please enter value here</h6></div>}
            
          </div>
          
          
          <button onClick={addproduc} type="submit" className="btn btn-primary">
          Add product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
