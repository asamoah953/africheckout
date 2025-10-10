function Settings(){
    return(
        <div className="main-compliance-container">
            <h3 style={{position:'relative', fontSize:'2.3rem'}}>Settings</h3>
            <div className="compliance-page">
                <div>
                    <h3 >Change Password</h3>
                    <h3 className="graytext" style={{color:'gray', fontSize:'.7rem'}}>Change User Password</h3>
                </div>

                <div>
                    <h3><label htmlFor="input"></label>Current Password</h3>
                    <input type="text" />
                    <h3><label htmlFor="input">New Password</label></h3>
                    <input type="text" />
                    <h3><label htmlFor="input">Confirm Password</label></h3>
                    <input type="text" />
                    <button>Save Changes</button>
                </div>

                <div>
                    <h3>API Keys & Webhooks</h3>
                    <h3 className="graytext" style={{color:'gray', fontSize:'.7rem'}}>Integrate Africheckout to your website/app using <br />these API keys and webhook</h3>
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

               
              

               
               
            </div>

        </div>
    )
}

export default Settings;