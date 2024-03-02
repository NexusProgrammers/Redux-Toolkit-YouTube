import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../services/productsService";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="flex gap-7 p-4 items-center justify-center flex-wrap">
      {products &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
