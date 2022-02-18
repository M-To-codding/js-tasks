import products from '../data/response';

export default function fetchProductData() {
  //fetch...
  return handleProductsData(products);
}

//some handlers, parse, sort, ...
function handleProductsData(products) {
  return products;
}