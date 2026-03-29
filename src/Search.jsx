import React, { useState } from "react";
import Header from "./Header";
import api from "./services/api"; // ✅ FIXED

const Search = function () {

    const [query, setquery] = useState("");
    const [products, setProducts] = useState([]);

    const searchProduct = async () => {
        if (!query.trim()) {
            setProducts([]);
            return;
        }

        try {
            const response = await api.get(`/products/search?query=${query}`); // ✅ axios
            const data = response.data;

            console.log("SEARCH RESPONSE:", data);

            if (data.status) {
                setProducts(data.products);
            } else {
                setProducts([]);
            }

        } catch (error) {
            console.error("SEARCH ERROR:", error);

            if (error.response) {
                alert(error.response.data.message || "Search failed");
            } else {
                alert("Server is down or waking up (Render delay)");
            }
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

                    {/* ✅ EMPTY STATE */}
                    {products.length === 0 && (
                        <p style={{ textAlign: "center" }}>No results found</p>
                    )}

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