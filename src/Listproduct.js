import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export function Listproduct(props) {

    const [products, setProduct] = useState([]);
    const chks=sessionStorage.getItem("key");
    let navigate = useNavigate();     
    useEffect(() => {
      if(chks==="")
     {
      navigate("/");
     }
        fetch("https://localhost:7198/API/Nimaps/")
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, []);
    return (
        <div>
          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
                <th>ProductId</th>
                <th>ProductName</th>
                <th>CategoryId</th>
                <th>CategoryName</th>
               
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <tr key={prod.ProductId}>
                  <td>{prod.ProductName}</td>
                  <td>{prod.CategoryId}</td>
                  <td>{prod.CategoryName}</td>
                  
                  <td><a href= {"/Editprod/"+prod.ProductId}>Edit</a></td>
                  <td><a href= {"/Displayprod/"+prod.ProductId}>Display</a></td>
                  <td><a href= {"/Deleteprod/"+prod.ProductId}>Delete</a></td>
              
                </tr>
              ))}
            </tbody>
          </table>
     </div>
      );
    }

    export default Listproduct;