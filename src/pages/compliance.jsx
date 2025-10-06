function Compliance(){
    return(
        <div className="main-compliance-container">
            <h3 style={{position:'absolute', fontSize:'2.3rem'}}>Compliace</h3>
            <div className="compliance-page">
                <div>
                    <h3 >Brand Details</h3>
                    <h3 style={{color:'gray', fontSize:'.9rem'}}>Brand Information</h3>
                </div>

                <div>
                    <h3><label htmlFor="input"></label>Brand Name</h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Brand Description</label></h3>
                    <input type="text" />
                    <button>Save Changes</button>
                </div>

                <div>
                    <h3>Business Details and Documents</h3>
                </div>

                <div>
                    <h3><label htmlFor="input"></label>Legal Business Name</h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Business type</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Industry</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Country</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Business Registration Document</label></h3>
                    <input type="text" />
                    <button>Save Changes</button>
                </div>

                <div>
                    <h3>Ownership</h3>
                    <h3 style={{color:'gray', fontSize:'.9rem'}}>Business Owner Information</h3>
                </div>

                <div>
                    <h3><label htmlFor="input"></label>Email Address</h3>
                    <input type="text" />
                    <h3><label htmlFor="input">First Name</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Last Name</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">DOB</label></h3>
                    <input type="date" />
                    <h3><label htmlFor="input">Nationality</label></h3>
                    <input type="date" />
                    <h3><label htmlFor="input">Address</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Identity type</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">ID Number</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Identity Image</label></h3>
                    <input type="text" />
                    <button>Save Changes</button>
                </div>

               
               
            </div>

        </div>
    )
}

export default Compliance;