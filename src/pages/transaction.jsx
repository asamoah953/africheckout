import SearchBar from "../components/searchBar";
import { BiX } from "react-icons/bi";



function Transaction() {
    return (
        <div className="transaction-page">
            <h2 className="transact" >Transactions</h2>
            <div className="container">
                <SearchBar className='searchbar' /><hr className='transaction-hr' />
                <BiX className="no-transaction" />
                <h3 className="no-transactions">No Transaction</h3>
            </div>
        </div>
    )
}


export default Transaction;

