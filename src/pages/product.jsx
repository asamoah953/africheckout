import { GoChevronRight } from "react-icons/go";
import { BiX } from "react-icons/bi";
import { Link } from 'react-router-dom'

function Product() {
    return(
        <div className="production-container">

            <div className='producton-header'>
                <h3 className='list1' >Product <GoChevronRight/></h3>
                <h3 className='list' >List</h3>
                <div className="product-button"><h2 style={{marginTop:'4px',fontSize:'2.2rem',color:'black' }}>Products</h2><Link to='/newproduct'><button className="button">New product</button></Link> </div>
            </div>

           <div className="production-list">
            <BiX style={{marginLeft:'48%', fontSize:'2rem'}}/>
            <h3 className="prod" >No Product</h3>
           </div>


        </div>
    )
}

export default Product;