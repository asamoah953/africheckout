import SearchBar from "../components/searchBar";
import { BiX } from "react-icons/bi";



function Transaction(){
    return(
     <div className="transaction-page">
        <h2 className="transact" style={{marginTop:'1.5rem'}}>Transactions</h2>
        <div className="container">
            <SearchBar style={{backgroundColor:'black',with:'100%'}}/><hr className ='transaction-hr' />
            <BiX className="no-transaction"/>
            <h3 className="no-transactions">No Transaction</h3>
        </div>
     </div>
    )
}


export default Transaction;

