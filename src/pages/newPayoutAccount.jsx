import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";


function NewPayOutAccount() {
  return (
    <div className="newPayoutAccount-container">
      <div className="newPayoutAccount-header">
        <h3 className="payout-breadcrumb"><Link to="/payout">Payout Accounts</Link> <GoChevronRight /></h3>
        <h3 className="payout-breadcrumb">Create</h3>
        <h2 className="payout-title">Create Payout Accounts</h2>
      </div>

      <form className="payout-form">
        <label className="product-label">
          Payment Method<span className="required">*</span>
        </label>
        <select className="product-select">
          <option value="">Select Payment Method</option>
          <option value="mpesa">M-Pesa (Fiat-to-crypto onramp)</option>
          <option value="bank">Bank transfer / Mobile Money / Mpesa (Cashramp)</option>
          <option value="card">Credit / Debit Card (Fiat-to-crypto onramp)</option>
          <option value="revolut">Revolut Pay (Fiat-to-crypto onramp)</option>
          <option value="ghs">GHS - Ghana Cedi</option>
        </select>

        <div className="button-group">
          <button type="button" className="btn create">Create</button>
          <button type="button" className="btn outline">Create & create another</button>
          <Link to="/payout"><button type="button" className="btn cancel">Cancel</button></Link>
        </div>
      </form>
    </div>
  );


}

export default NewPayOutAccount;