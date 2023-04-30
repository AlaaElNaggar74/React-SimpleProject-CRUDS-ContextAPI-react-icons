import React, { useContext, useEffect, useState } from "react";
import { LoginContextFun } from "../Context/LoginContext";
// import {  } from "react-icons/ai";
import { AiFillEye, AiFillEdit, AiFillCloseSquare } from "react-icons/ai";

import { ImSearch } from "react-icons/im";

import { Link } from "react-router-dom";

const HomePage = () => {
  const [show, setShow] = useState(false);
  let [showUpdate, setShowUpdat] = useState(false);
  let [SubmitButtnVal, setSubmitButtnVal] = useState("Submit");
  let [searchWord, setSearchWord] = useState("");

  const [formInputs, setFormInputs] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  let { getDataFromFakeStore, products, deletFun, addProductFun, updateFun } =
    LoginContextFun();

  useEffect(() => {
    getDataFromFakeStore();
  }, []);

  // console.log(products)
  const onChangeHandler = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    showUpdate ? updateFun(formInputs) : addProductFun(formInputs);
    setFormInputs({
      title: "",
      category: "",
      price: "",
      description: "",
      image: "",
    });
    setShow(!show);
    setSubmitButtnVal("Submit");
  };

  let upddate = (productUpdate) => {
    show ? setShow(show) : setShow(!show);

    setShowUpdat(true);
    setFormInputs({
      id: productUpdate.id,
      title: productUpdate.title,
      category: productUpdate.category,
      price: productUpdate.price,
      description: productUpdate.description,
      image: productUpdate.image,
    });
    setSubmitButtnVal("Upddate");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  let searchWordFun = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <div className="py-8 container mx-auto px-4">
      <h1 className="text-center text-3xl ">ToDo list</h1>
      <div className="alert alert-primary flex justify-between px-5">
        <div>
          <h5>All Products:</h5>
        </div>
        <button className="btn btn-info" onClick={() => setShow(!show)}>
          {show ? "Hidden" : "Show"}
        </button>
      </div>

      {show ? (
        <form className="p-4 flex flex-col" onSubmit={handleSubmit}>
          <input
            required
            className="py-2 px-3 mb-4 border border-2 rounded "
            type="text"
            name="title"
            placeholder="title"
            value={formInputs.title}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="price"
            required
            className="py-2 px-3 mb-4 border border-2 rounded "
            placeholder="price"
            value={formInputs.price}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="description"
            className="py-2 px-3 mb-4 border border-2 rounded "
            placeholder="description"
            value={formInputs.description}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="image"
            className="py-2 px-3 mb-4 border border-2 rounded "
            placeholder="image"
            value={formInputs.image}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="category"
            className="py-2 px-3 mb-4 border border-2 rounded "
            placeholder="category"
            value={formInputs.category}
            onChange={onChangeHandler}
          />
          <button
            type="submit"
            className="py-2 px-3 mb-4 border border-2 rounded  w-[fit-content] bg-red-500 rounded"
          >
            {SubmitButtnVal}
          </button>
        </form>
      ) : (
        ""
      )}

      <div className="px-4 w-full ">
        <h1 className="text-center text-3xl  py-10">Table Content</h1>
        <div className="text-center  ">
          <span className="text-2xl"> Search:</span>
          <span className="relative ">
            {" "}
            <input
              type="text"
              placeholder="Search"
              className="ml-2 py-2 px-3 mb-7 border border-2 rounded "
              value={searchWord}
              onChange={searchWordFun}
            />
            <ImSearch className="absolute top-0 right-3 text-gray-500 " />
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-11/12 m-auto ">
            <thead>
              <tr className="">
                <th className="border border-1  w-2/12">title</th>
                <th className=" border border-1  w-2/12">category</th>
                <th className=" border border-1 w-1/12">price</th>
                <th className=" border border-1  w-3/12">description</th>
                <th className=" border border-1  w-2/12">image</th>
                <th className=" border border-1 w-2/12">option</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((product) => {
                  return searchWord.toLowerCase() === ""
                    ? product
                    : product.title.toLowerCase().includes(searchWord);
                })
                .map((product) => (
                  <tr key={product.id}>
                    <td className="p-1">{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.description.slice(0, 50)}...</td>
                    <td>
                      <img
                        src={product.image}
                        alt="erorr"
                        className="w-[100px] h-[100px] "
                      />
                    </td>
                    <td>
                      <button
                        className="bg-red-500 border border-1 rounded py-1 px-3"
                        onClick={() => deletFun(product.id)}
                      >
                        <AiFillCloseSquare className="text-3xl text-white" />
                      </button>
                      <button
                        className="bg-red-500 border border-1 rounded py-1 px-3 ml-1"
                        onClick={() => upddate(product)}
                      >
                        <AiFillEdit className="text-3xl text-white" />
                      </button>
                      <button className="bg-red-500 border border-1 rounded p-1  ml-1">
                        <Link to={`/viewEProduct/${product.id}`}>
                          <AiFillEye className="text-3xl text-white" />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
