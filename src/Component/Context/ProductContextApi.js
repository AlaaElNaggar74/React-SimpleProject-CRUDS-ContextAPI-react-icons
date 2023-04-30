import { createContext, useContext, useState } from "react";

let ProductContext = createContext();

export let ProductContextProvider = ({ children }) => {
  let [product, setProduct] = useState("");
  return (
    <ProductContext.Provider value={{ product,setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export let ProductContextFun = () => {
  return useContext(ProductContext);
};
