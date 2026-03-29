import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import BASE_URL from "./services/api";

const AddProduct = function () {

    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState();

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
            const result = await fetch(`${BASE_URL}/add-product`, {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData,
            });

            const data = await result.json();
            console.log("RESPONSE:", data);

            if (data.status === true) {
                navigate("/UpdateProduct");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
            <Header />
            <h1>Fill the form to add product</h1>

            <div className="product_form">
                <div className="product_inputs">
                    <input type="text" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="product_inputs">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>

                <div className="product_inputs">
                    <input type="number" placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="product_inputs">
                    <input type="text" placeholder="Product Description" onChange={(e) => setDesc(e.target.value)} />
                </div>

                <div className="add_button">
                    <button onClick={addproduct}>Add Product</button>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;