import { GoChevronRight } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";



function Product() {
    return(
        <div className="production-container">

            <div className='producton-header'>
                <h3 style={{display:'inline-block'}}>Product <GoChevronRight/></h3>
                <h3 style={{display:'inline-block'}}>List</h3>
                <div className="product-button"><h2 style={{marginTop:'4px',fontSize:'2.2rem',color:'black' }}>Products</h2> <button className="button">New product</button></div>
            </div>

           <div className="production-list">
            <ImCancelCircle style={{marginLeft:'48%', fontSize:'2rem'}}/>
            <h3 style={{marginLeft:'45%',marginTop:'.2rem'}}>No Product</h3>
           </div>

           

        </div>
    )
}

export default Product;