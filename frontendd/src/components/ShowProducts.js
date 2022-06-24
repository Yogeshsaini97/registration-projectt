import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function ShowProducts()
{
  



    const[array,setarray]=useState([]);
    const[searching,setsearching]=useState("");

    const Navigate=useNavigate();
    useEffect(()=>
    {


  

      showfetch();
            
    },[])

    const showfetch=async ()=>
    {
        let result=await fetch("http://localhost:5000/showproduct");
        let bigarray=await result.json();
        setarray(bigarray);
      

    }


    const searchkro=async (event)=>
    {
        
      if((event.target.value).length==0)
      {
        let result=await fetch("http://localhost:5000/showproduct");
        let bigarray=await result.json();
        setarray(bigarray);
      }
      else
      {
        let data=await fetch(`http://localhost:5000/searchproduct/${event.target.value}`);
        let mango=await data.json();
        console.log(mango)
        setarray(mango);
      }

    
   
    }






  const deletekro=async (id)=>
  {
    let data=await fetch(`http://localhost:5000/deleteproduct/${id}`,{method:"Delete"});
    console.log(data)
    window.location.reload()  
    alert("product deleted successfully!!")
  }


   
    



    




    return(<>
    
   
    
    <div className="container ">
    <div className="input-group d-flex justify-content-center my-5">
    <div className="form-outline">
      <input type="text" Value={searching} onChange={searchkro} id="form1" placeholder='Search here...' className="form-control" />
      
    </div>
  </div>
    
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Color</th>
      <th scope="col">Ram</th>
      <th scope="col">Price</th>
      <th scope="col">action</th>

    </tr>
  </thead>
  <tbody>
  {
    array.map((e,i)=>
    <tr>
      <th scope="row">{i+1}</th>
      <td>{e.Name}</td>
      <td>{e.Brand}</td>
      <td>{e.Color}</td>
      <td>{e.Ram}</td>
      <td>{e.Price}</td>
      <td><button type="button" className="btn btn-danger" onClick={()=>{deletekro(e._id)}}>Delete</button></td>
      <td><Link to={`/Updateproduct/${e._id}`} >UPDATE</Link></td>
    </tr>
    
    )
  }
  </tbody>
  </table>

    </div> </>)
   
}

export default ShowProducts;