import { BiX } from "react-icons/bi";
import { Link } from 'react-router-dom'

function Product() {
    return (
        <div className="production-container">

            <div className='producton-header'>

                <div className="product-button"><h2 >Products</h2><Link to='/newproduct'><button className="button">New product</button></Link> </div>
            </div>

            <div className="production-list">
                <BiX className="empty-icon" style={{color:"red"}} />
                <h3 className="prod" >No Product</h3>
            </div>


        </div>
    )
}

export default Product;