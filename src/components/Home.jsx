import React from "react";
import { useState } from "react";
import Products from "./Products";

export default function Home({ products, fetchProducts }) {
    const [query, setQuery] = useState("");
    return (
      <>
        <div className="search-bar">
            <input
                className="search"
                placeholder="Search For Products..."
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            />
        </div>
        <div className="products-list">
            {/* {products.filter((product) => product.title.toLocaleLowerCase().includes(query))
            .map((product) => (
                <Products key={product.id} item={product} fetchProducts={fetchProducts} />
            ))} */}
        </div>
       </>
    );
}