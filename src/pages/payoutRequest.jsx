import { GoChevronRight } from "react-icons/go";
import { BiX } from "react-icons/bi";

function PayoutRequest() {
    return(
        <div className="production-container">

            <div className='producton-header'>
                
                <div className="product-button"><h2 style={{marginTop:'4px',fontSize:'2.2rem',color:'black' }}>Payout Request</h2> <button className="button" style={{width:'9rem'}}>Payout Requests</button></div>
            </div>

           <div className="production-list">
            <BiX style={{marginLeft:'48%', fontSize:'2rem'}}/>
            <h3 style={{marginLeft:'45%',marginTop:'.2rem', backgroundColor:'white'}}>No Payout Account</h3>
           </div>

           

        </div>
    )
}

export default PayoutRequest;