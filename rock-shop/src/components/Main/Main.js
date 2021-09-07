import React from "react";
import { useDispatch } from "react-redux";
import { initialProducts } from "../../actions/action";
import ProductsList from "../../services/productsList";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialProducts());
  }, [dispatch]);
  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default Main;
