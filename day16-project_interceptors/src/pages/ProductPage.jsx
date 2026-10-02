import React, { useEffect, useState } from "react";
import Product from "../componets/Product";
import { axiosInstance } from "../config/axiosInstancs";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");
      setProductData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  if (isLoading) return "Page Loading";

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {productData.map((elem) => {
        return <Product key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default ProductPage;
