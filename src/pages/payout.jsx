import { GoChevronRight } from "react-icons/go";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";

function PayOut() {
    return(
        <div className="payout-container">

            <div className='payout-header'>
                <h3 style={{display:'inline-block'}}>Payout Accounts <GoChevronRight/></h3>
                <h3 style={{display:'inline-block'}}>List</h3>
                <div className="payout-button"><h2 className="p-out">Payout Account</h2> <Link to="/newpayoutaccount"><button className="payoutbutton">New payout account</button></Link></div>
            </div>

           <div className="payout-list">
            <BiX className="cancel2" style={{marginLeft:'48%', fontSize:'2rem'}}/>
            <h3 className='n-payment' >No Payout Account</h3>
           </div>

           

        </div>
    )
}

export default PayOut;