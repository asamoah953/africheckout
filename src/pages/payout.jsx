import { GoChevronRight } from "react-icons/go";
import { BiX } from "react-icons/bi";

function PayOut() {
    return(
        <div className="production-container">

            <div className='producton-header'>
                <h3 style={{display:'inline-block'}}>Payout Accounts <GoChevronRight/></h3>
                <h3 style={{display:'inline-block'}}>List</h3>
                <div className="product-button"><h2 style={{marginTop:'4px',fontSize:'2.2rem',color:'black' }}>Products</h2> <button className="button">New payout account</button></div>
            </div>

           <div className="production-list">
            <BiX style={{marginLeft:'48%', fontSize:'2rem'}}/>
            <h3 style={{marginLeft:'45%',marginTop:'.2rem', backgroundColor:'white'}}>No Payout Account</h3>
           </div>

           

        </div>
    )
}

export default PayOut;