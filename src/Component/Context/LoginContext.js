import { useState } from "react";
import { createContext, useContext } from "react";

let LoginContext = createContext();

export let LoginContextProvider = ({ children }) => {
  let [products, setProducts] = useState([]);

  // let [title, setTitle] = useState("");
  // let [price, setPrice] = useState("");
  // let [discription, setDescription] = useState("");
  // let [image, setImage] = useState("");
  // let [category, setCategory] = useState("");

  let getDataFromFakeStore = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  let deletFun = (id) => {
    let newArr = products.filter((product) => product.id !== id);
    setProducts(newArr);
  };

  let addProductFun = (obj) => {
    setProducts([
      ...products,
      { ...obj, id: Math.round(Math.random() * 100000) },
    ]);
  };

  let updateFun = (obj) => {
    let x = products.map((product) =>
      product.id === obj.id
        ? {
            id: obj.id,
            title: obj.title,
            category: obj.category,
            price: obj.price,
            description: obj.description,
            image: obj.image,
          }
        : product
    );
    setProducts(x);
  };
  let searchhhFun = (leters) => {
    products.filter((product) => {
      console.log(product.title);
      return leters.toLowerCase() === ""
        ? product
        : product.title.includes(leters);
    });
  };

  return (
    <LoginContext.Provider
      value={{
        products,
        getDataFromFakeStore,
        deletFun,
        addProductFun,
        updateFun,
        searchhhFun,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export let LoginContextFun = () => {
  return useContext(LoginContext);
};
