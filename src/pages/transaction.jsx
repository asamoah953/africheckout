import SearchBar from "../components/searchBar";


function Transaction(){
    return(
     <div className="transaction-page">
        <h2 style={{marginTop:'1.5rem',backgroundColor:'#FFFFFF'}}>Transactions</h2>
        <div className="container">
            <SearchBar style={{backgroundColor:'black',with:'100%'}}/><hr/>
        </div>
     </div>
    )
}


export default Transaction;