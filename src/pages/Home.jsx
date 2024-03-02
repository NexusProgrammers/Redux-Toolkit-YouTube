import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../services/productsService";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-wrap gap-7 p-6 justify-center">
      {products &&
        products.map((product) => {
          return (
            <div>
              <ProductCard product={product} />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
