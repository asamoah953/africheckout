import { GoChevronRight } from "react-icons/go";
import { BiX } from "react-icons/bi";

function PayOut() {
    return(
        <div className="payout-container">

            <div className='payout-header'>
                <h3 style={{display:'inline-block'}}>Payout Accounts <GoChevronRight/></h3>
                <h3 style={{display:'inline-block'}}>List</h3>
                <div className="payout-button"><h2 style={{marginTop:'4px',fontSize:'2.2rem',color:'black' }}>Payout Account</h2> <button className="payoutbutton">New payout account</button></div>
            </div>

           <div className="payout-list">
            <BiX className="cancel2" style={{marginLeft:'48%', fontSize:'2rem'}}/>
            <h3 className='no-payment' style={{marginLeft:'45%',marginTop:'.2rem', backgroundColor:'white'}}>No Payout Account</h3>
           </div>

           

        </div>
    )
}

export default PayOut;