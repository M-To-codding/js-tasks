import React, {useEffect, useState} from "react";
import ProductsList from "./ProductsList";
import fetchProductData from "../utils/fetchProductData";
import ProductsFiltersContainer from "../productsFilters/ProductsFiltersContainer";
import filters from "./../productsFilters/filters";

function ProductsListContainer() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [allFilters, setFilters] = useState(filters());


  useEffect(() => {
    let response = fetchProductData();
    setProducts(response);
  }, []);


  function setSelectedFilters(filter, e) {
    let selectedFilters = [];

    allFilters.forEach((item) => {
      if (item.id === filter.id) {
        let newFilter = filter;
        newFilter.value = e.currentTarget.value;
        newFilter.selected = newFilter.value.length > 0;
      }
      selectedFilters.push(item);
    })

    setFilters(selectedFilters);
    handleProductsList();
  }

  function handleProductsList() {
    let newProductsList = [];
    let isSelectedFiltersExists = false;

    allFilters.forEach((filter)=>{
      if(filter.selected) {
        isSelectedFiltersExists = true;
        newProductsList = [...products.filter((item)=>item[filter.id].toString().toLowerCase().includes(filter.value))]
      }
    });

    if(newProductsList.length === 0 && !isSelectedFiltersExists) {
      newProductsList = products;
    }

    setFilteredProducts(newProductsList);
  }


  if (!products) {
    return <div>Loading...</div>;
  }

  return <>
    <ProductsFiltersContainer filters={allFilters} setSelectedFilters={setSelectedFilters}/>
    <ProductsList products={filteredProducts ? filteredProducts : products}/>
  </>
}

export default ProductsListContainer;