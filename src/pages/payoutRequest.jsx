import { BiX } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";


function PayoutRequest({ showPopup, setShowPopup }) {
    return (


        <div className="production-container">

            <div className='producton-header'>

                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <div className="popup-header">
                                <h3>Create payout requests</h3>
                                <RxCross2 className="close-icon" onClick={() => setShowPopup(false)} />
                            </div>

                            <form className="popup-form">
                                <label className="popup-label">
                                    Available Payout<span className="required">*</span>
                                </label>
                                <select className="popup-select">
                                    <option value="">Select an option</option>
                                    <option value="btc">BTC Wallet</option>
                                    <option value="bank">Bank Account</option>
                                    <option value="mobile">Mobile Money</option>
                                </select>

                                <div className="popup-buttons">
                                    <button type="button" className="btn create">Create</button>
                                    <button
                                        type="button"
                                        className="btn cancel"
                                        onClick={() => setShowPopup(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="p-button"><h2 className="request">Payout Request</h2><button className="button" style={{ width: '9rem' }} onClick={() => setShowPopup(true)}>Payout Requests</button></div>
            </div>

            <div className="production-list">
                <BiX />
                <h3 className="no-pay">No Payout Account</h3>
            </div>



        </div>
    )
}

export default PayoutRequest;