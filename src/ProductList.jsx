import { useEffect, useState } from "react";
import Header from "./Header";
import api from "./services/api"; // ✅ use axios

const ProductList = function () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await api.get("/productlist"); // ✅ clean API call
            const data = response.data;

            console.log("PRODUCTS:", data);

            setProducts(data.products || []); // ✅ safe handling

        } catch (error) {
            console.error("ERROR:", error);
        }
    };

    return (
        <div>
            <Header />

            <section className="product">
                <div className="container">

                    <div className="product_head">
                        <h2>Product Listing</h2>
                    </div>

                    {/* ✅ HANDLE EMPTY STATE */}
                    {products.length === 0 && (
                        <p style={{ textAlign: "center" }}>No products found</p>
                    )}

                    <div className="product_wrap">

                        {products.map(product => (
                            <div key={product.id} className="product_card">

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
    )
}

export default ProductList;