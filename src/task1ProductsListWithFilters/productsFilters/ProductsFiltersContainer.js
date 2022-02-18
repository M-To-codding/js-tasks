import React from "react";
import ProductsFilters from "./ProductsFilters";

function ProductsFiltersContainer({filters, setSelectedFilters}) {
  // TODO: replace filters logic from component ProductsListContainer here
  return <ProductsFilters filters={filters} setSelectedFilter={setSelectedFilters}/>
}

export default ProductsFiltersContainer;