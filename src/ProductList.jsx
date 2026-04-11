import { useEffect, useState } from "react";
import Header from "./Header";
import api from "./services/api";
import Banner from "./components/Banner";

const ProductList = function () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await api.get("/productlist");
            const data = response.data;

            console.log("PRODUCTS:", data);

            setProducts(data.products || []);

        } catch (error) {
            console.error("ERROR:", error);
        }
    };

    return (
        <div>
            <Header />

            <Banner
                title="Here is the Product Listing"
                subtitle="Manage your products with ease and simply found the list here."
                ctaText="Add New Product"
                ctaLink="/AddProduct"
            />

            <section className="product">
                <div className="container">

                    <div className="product_head">
                        <h2>Product Listing</h2>
                    </div>

                    {products.length === 0 && (
                        <p style={{ textAlign: "center", fontSize: "16px", color: "#4a4a4a", marginTop: "40px" }}>No products found</p>
                    )}

                    {products.length > 0 && (
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
                                        <h4>${product.price}</h4>
                                    </div>

                                    <div className="product_desc">
                                        <p>{product.description}</p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </section>

        </div>
    )
}

export default ProductList;