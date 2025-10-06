
function NewProduct() {
    return(
        <div className="newproduct-container">

            <div className='newproduct-header'>
                <h3 className='list1' >Product</h3>
                <h3 className='list' >List</h3>
                <div className="newproduct-button"><h2 style={{marginTop:'4px',fontSize:'2.2rem',color:'black' }}>Products</h2> <button className="newproductbutton">New product</button></div>
            </div>

           <div className="newproduct-list">
            <h3 className="prod" style={{marginLeft:'45%',marginTop:'.2rem', backgroundColor:'white'}}>No Product</h3>
           </div>


        </div>
    )
}

export default NewProduct;