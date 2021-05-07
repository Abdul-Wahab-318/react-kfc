function FeaturedProducts()
{
    return(
        <div className="featured-products-parent container">

            <div className="featured-product-card">
                <div className="card-image">
                    <img width="100%" src="https://cdn-images-fishry.azureedge.net/product/500x360-a7c635f-kfc.png/xs" alt="" />
                </div>
                <div className="card-meal-name">
                    <p className="mb-0">Ramadan Feast</p>
                </div>
                <div className="card-meal-details">
                    <p className="assistant">4 Zinger Burgers + 4 Pcs Chicken + 4 Sabroso Chicken Samosas + 2 Olper’s Flavored Milks + 2 Choco Lava Packs...</p>
                </div>
                <div className="card-meal-footer">
                    <a href="index.html" className="card-price">PKR 1,875</a>
                    <a href="index.html" className="add-to-bucket">add to bucket</a>
                </div>
            </div>

            <div className="featured-product-card">
                <div className="card-image">
                    <img width="100%" src="https://cdn-images-fishry.azureedge.net/product/Value-Bucket-500x360-c5df670-kfc.png/xs" alt="" />
                </div>
                <div className="card-meal-name">
                    <p className="mb-0">Value bucket</p>
                </div>
                <div className="card-meal-details">
                    <p className="assistant">9 Pcs Hot & Crispy Chicken</p>
                </div>
                <div className="card-meal-footer">
                   <a href="index.html" className="card-price">PKR 1,875</a>
                   <a href="index.html" className="add-to-bucket">add to bucket</a>
                </div>
            </div>

            <div className="featured-product-card">
                <div className="card-image">
                    <img width="100%" src="https://cdn-images-fishry.azureedge.net/product/FF1-500x360-ad4dfde-kfc.png/xs" alt="" />
                </div>
                <div className="card-meal-name">
                    <p className="mb-0">Family Festival 1</p>
                </div>
                <div className="card-meal-details">
                    <p className="assistant">4 Zinger Burgers + 4 Pcs Chicken + 4 Sabroso Chicken Samosas + 2 Olper’s Flavored Milks + 2 Choco Lava Packs...</p>
                </div>
                <div className="card-meal-footer">
                    <a href="index.html" className="card-price">PKR 1,875</a>
                    <a href="index.html" className="add-to-bucket">add to bucket</a>
                </div>
            </div>
            
            
        </div>
    )
}

export default FeaturedProducts;