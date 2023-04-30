import React from "react";

import { useParams } from "react-router-dom";
import { LoginContextFun } from "../Context/LoginContext";
const ViewProduct = () => {
  let { products } = LoginContextFun();
  let param = useParams();
  // console.log("Type Of PID ",typeof(+param.Pid));
  // console.log("Type Of PID ",typeof(products[0].id));
  // console.log(products);

  let ProductView = products.filter((product) => product.id === +param.Pid);
  console.log(ProductView);

  return (
  
    

    <>
      <h1 className="text-5xl 500 py-12 text-red-700 text-center">Product Number [ {+param.Pid}] Detailes </h1>
      <div className="flex flex-wrap items-center w-10/12 mx-auto pt-10">
        <img src={ProductView[0].image} alt="error" className="w-4/12 h-[400px]" />
        <div className="w-8/12 px-10">
          <h1 className="text-4xl 500 mb-5">Title : <span className="text-2xl text-gray-500 mb-5">{ProductView[0].title}</span></h1>
          <h1 className="text-4xl 500 mb-5">Description : <span className="text-2xl text-gray-500 mb-5">{ProductView[0].description}</span></h1>
          <h1 className="text-4xl 500 mb-5">Category : <span className="text-2xl text-gray-500 mb-5">{ProductView[0].category}</span></h1>
          <h1 className="text-4xl 500 mb-5">Price : <span className="text-2xl text-gray-500 mb-5">{ProductView[0].price} </span> $</h1>
          
        </div>
      </div>
    </>
  
  );
};

export default ViewProduct;
