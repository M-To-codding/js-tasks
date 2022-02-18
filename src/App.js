import './App.css';
import ProductsListContainer from "./task1ProductsListWithFilters/productsList/ProductsListContainer";
import Twitter from "./task2TwitterElementImplementation/Twitter";
import Loading from "./task2TwitterElementImplementation/Loading";
import Badge from "./task2TwitterElementImplementation/Badge";
import React from "react";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        {/*task 1*/}
        {/*<ProductsListContainer/>*/}

        {/*task 2*/}
        <Twitter username='tylermcginnis33'>
          {(user) => user === null
            ? <Loading />
            : <Badge info={user} />}
        </Twitter>

      </main>
    </div>
  );
}

export default App;
