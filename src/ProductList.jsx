import { useEffect, useState } from "react";
import Header from "./Header";

const ProductList = function () {

    const [products, setProducts] = useState([]);

    useEffect(function () {
        fetch(" http://127.0.0.1:8000/api/productlist")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            });
    }, []);

    return (
        <div>
            <Header />


            <section className="product">
                <div className="container">

                    <div className="product_head">
                        <h2>Product Listing</h2>
                    </div>
                    <div className="product_wrap">

                        {products.map(product => (
                            <div key={product.id} className="product_card">

                                <div className="product_image">
                                    <img
                                        src={`http://127.0.0.1:8000/products/${product.image}`}
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