import React from "react";

function ProductsList({products}) {
  return <section className="products-list">
    {
      products.map((item) => {
        return <article key={item.id}>
          <h3>{item.title}</h3>
          <h4 className="price-label">{item.price}</h4>
          <h4>{item.count}</h4>
        </article>
      })
    }
  </section>
}

export default ProductsList;