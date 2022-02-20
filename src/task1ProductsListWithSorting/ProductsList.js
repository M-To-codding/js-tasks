import React from "react";

function ProductsList({products}) {
  const productList = <>
    {
      products.map((product) => {
        return <article key={product.id}>
          <br/>
          <h3>{product.title}</h3>
          <h4 className="price-label">price: {product.price}</h4>
          <h4>count: {product.count}</h4>
          <br/>
          <hr/>
        </article>
      })
    }
  </>;

  return <section className="products-list">
    {productList}
  </section>
}

export default ProductsList;