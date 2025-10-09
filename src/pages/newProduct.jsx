import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

function NewProduct() {
   return (
  <div className="newproduct-container">
    <div className="create-product">
      <div className="create-product-container">
        <div className="h3">
          <h3 className="h3"><Link to="/product">Product</Link></h3> <GoChevronRight className="arrowIcon"/>
          <h3 className="h3">Create</h3>
        </div>
        <h2 className="create-product-header">Create Product</h2>
      </div>

      <form className="create-product-form">
        <div>
          <label className="product-label">Product Name</label>
          <input type="text" placeholder="Enter Product Name" className="product-input" />
        </div>
        <div>
          <label className="product-label">Product Description</label>
          <input type="text" placeholder="Enter Product Description" className="product-input" />
        </div>
        <div>
          <label className="product-label">Amount</label>
          <input type="text" placeholder="Enter Amount" className="product-input" />
        </div>
        <div>
          <label className="product-label">Currency</label>
          <input type="text" placeholder="Enter Currency" className="product-input" />
        </div>
      </form>

      <div className="btn-group">
        <button className="btn btn-primary">Create</button>
        <button className="btn btn-secondary">Create & Create Another</button>
        <Link to="/product"><button className="btn btn-cancel">Cancel</button></Link>
      </div>
    </div>
  </div>
);

}

export default NewProduct;