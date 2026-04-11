import Banner from "./components/banner";
import Header from "./Header";

const UpdateProduct = function () {
    return (
        <div>
            <Header />

            <Banner
                title="Update Product"
                subtitle="Modify the details of an existing product."
                ctaText="View Product List"
                ctaLink="/productlist"
            />
        </div>
    )
}

export default UpdateProduct;