import React from "react";

function ProductsFilters({filters, setSelectedFilter}) {

  return  <section className="container productsFilters">
    <ul className="filters-list">
      {filters.map((item, index) => {
        return <li key={item.id}>
          <h4>{item.title}</h4>
          <input
            type={item.type}
            value={item.value}
            onChange={(e) => setSelectedFilter(item, e)}
            className={item.selected ? '-selected' : ''}
            placeholder={item.title}/>
        </li>
      })}

    </ul>
  </section>
}

export default ProductsFilters;