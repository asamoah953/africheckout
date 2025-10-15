import { AiOutlineHome } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuFileText } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import './../../CSS/dashboard.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronUpOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from "react";

function DashBoard({ dashBoard, setDashBoard }) {

  const [account, setAccount] = useState(true);
  const [payout, setPayout] = useState(true)

  return (
    <div className={!dashBoard ? 'dashboard-wrapper vanish' : 'dashboard-wrapper'}>
      <div className={!dashBoard ? 'dashboard-container shrink' : 'dashboard-container'}>

        {dashBoard && (
          <div className="logo-wrapper">
            <img
              alt="Africheckout logo"
              src="https://africheckout.com/images/logo.png"
              className="sidebar-logo"
            />
          </div>
        )}

        {/* Main Links */}
        <Link to='/' className="nav-link" onClick={() => setDashBoard(false)}>
          <div className="nav-item">
            <AiOutlineHome className="nav-icon" />
            {dashBoard && <span className="nav-text">Dashboard</span>}
          </div>
        </Link>

        <Link to='/product' className="nav-link" onClick={() => setDashBoard(false)}>
          <div className="nav-item">
            <TfiMenuAlt className="nav-icon" />
            {dashBoard && <span className="nav-text">Products</span>}
          </div>
        </Link>

        <Link to='/transaction' className="nav-link" onClick={() => setDashBoard(false)}>
          <div className="nav-item">
            <AiOutlineDollarCircle className="nav-icon" />
            {dashBoard && <span className="nav-text">Transactions</span>}
          </div>
        </Link>

        {dashBoard && (
          <div className="section-header">
            <span className="accountandpauout">Accounts</span>
            {account ? (
              <IoIosArrowDown className="toggle-icon" onClick={() => setAccount(prev => !prev)} />
            ) : (
              <IoChevronUpOutline className="toggle-icon" onClick={() => setAccount(prev => !prev)} />
            )}
          </div>
        )}

        {!account && (
          <>
            <Link to='/compliance' className="nav-link" onClick={() => setDashBoard(false)}>
              <div className="nav-item">
                <LuFileText className="nav-icon" />
                {dashBoard && <span className="nav-text">Compliance</span>}
              </div>
            </Link>

            <Link to='/settings' className="nav-link" onClick={() => setDashBoard(false)}>
              <div className="nav-item">
                <BsTools className="nav-icon" />
                {dashBoard && <span className="nav-text">Settings</span>}
              </div>
            </Link>
          </>
        )}

        {dashBoard && (
          <div className="section-header">
            <span className="accountandpauout">Payouts</span>
            {payout ? (
              <IoIosArrowDown className="toggle-icon" onClick={() => setPayout(prev => !prev)} />
            ) : (
              <IoChevronUpOutline className="toggle-icon" onClick={() => setPayout(prev => !prev)} />
            )}
          </div>
        )}

        {!payout && (
          <>
            <Link to='/payout' className="nav-link" onClick={() => setDashBoard(false)}>
              <div className="nav-item">
                <MdOutlinePayment className="nav-icon" />
                {dashBoard && <span className="nav-text">Payout Accounts</span>}
              </div>
            </Link>

            <Link to='/request' className="nav-link" onClick={() => setDashBoard(false)}>
              <div className="nav-item">
                <IoMdSend className="nav-icon" />
                {dashBoard && <span className="nav-text">Payout Request</span>}
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default DashBoard;