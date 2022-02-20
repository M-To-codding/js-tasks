import React, {useEffect, useState} from "react";
import ProductsList from "./ProductsList";
import fetchProductData from "./utils/fetchProductData";
import SortingDropdownContainer from "./SortDropdownContainer";
import {defaultSorting, sortByType} from "./utils/sortingMethods";

function ProductsListContainer() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    let data = fetchProductData();
    setProducts(defaultSorting(data));
  }, []);

  const sortProducts = function (selectedSorting) {
    let result = !selectedSorting
      ? defaultSorting(products)
      : sortByType(selectedSorting, products);

    setProducts(result);
  };

  return <>
    <SortingDropdownContainer sortProducts={sortProducts}/>
    <ProductsList products={products}/>
  </>
}

export default ProductsListContainer;