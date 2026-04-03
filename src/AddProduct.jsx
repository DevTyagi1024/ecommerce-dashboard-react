import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import api from "./services/api";

const AddProduct = function () {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    async function addproduct() {

        if (!name || !price || !desc || !file) {
            alert("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", desc);
        formData.append("image", file);

        try {
            const response = await api.post("/add-product", formData);
            const data = response.data;

            console.log("ADD PRODUCT RESPONSE:", data);

            if (data.status === true) {
                alert("Product added successfully ✅");
                navigate("/UpdateProduct");
            } else {
                alert("Failed to add product");
            }

        } catch (error) {
            console.error("ADD PRODUCT ERROR:", error);

            if (error.response) {
                alert(error.response.data.message || "Server error");
            } else {
                alert("Server is down or waking up (Render delay)");
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="auth-container">
                <div className="product_form">
                    <h1 className="product_form_title">Add New Product</h1>

                    <div className="product_inputs">
                        <label>Product Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="product_inputs">
                        <label>Product Price</label>
                        <input
                            type="number"
                            placeholder="Enter product price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>

                    <div className="product_inputs">
                        <label>Product Description</label>
                        <textarea
                            placeholder="Enter product description"
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                        />
                    </div>

                    <div className="product_inputs">
                        <label>Product Image</label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <div className="add_button">
                        <button onClick={addproduct}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;