import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import api from "./services/api"; // ✅ FIXED

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
            const response = await api.post("/add-product", formData); // ✅ axios
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
            <h1>Fill the form to add product</h1>

            <div className="product_form">
                <div className="product_inputs">
                    <input
                        type="text"
                        placeholder="Product Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="product_inputs">
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>

                <div className="product_inputs">
                    <input
                        type="number"
                        placeholder="Product Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="product_inputs">
                    <input
                        type="text"
                        placeholder="Product Description"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div className="add_button">
                    <button onClick={addproduct}>Add Product</button>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;