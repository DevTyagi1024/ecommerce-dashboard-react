import React, { useState } from "react";
import Header from "./Header";
import BASE_URL from "./services/api";

const Search = function () {

    const [query, setquery] = useState("");
    const [products, setProducts] = useState([]);

    const searchProduct = async () => {
        if (!query.trim()) {
            setProducts([]);
            return;
        }

        try {
            const res = await fetch(
                `${BASE_URL}/products/search?query=${query}`
            );

            const data = await res.json();

            if (data.status) {
                setProducts(data.products);
            } else {
                setProducts([]);
            }

        } catch (error) {
            console.error("Search error:", error);
        }
    };

    return (
        <div>
            <Header />

            <section className="search">
                <div className="container">

                    <div className="search_head">
                        <h2>Search Page</h2>
                    </div>

                    <div className="search_wrap">
                        <div className="search_input">
                            <input
                                type="text"
                                placeholder="Search Product"
                                onChange={(e) => setquery(e.target.value)}
                                value={query}
                            />
                        </div>

                        <div className="search_button">
                            <button className="search_btn" onClick={searchProduct}>
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="product_wrap">
                        {products.map(product => (
                            <div className="searchresult_wrap product_card" key={product.id}>

                                <div className="product_image">
                                    <img
                                        src={`https://ecomm-backend-1-9fod.onrender.com/products/${product.image}`}
                                        alt={product.name}
                                    />
                                </div>

                                <div className="product_title">
                                    <h3>{product.name}</h3>
                                </div>

                                <div className="product_price">
                                    <h4>{product.price}</h4>
                                </div>

                                <div className="product_desc">
                                    <p>{product.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Search;