import { AiOutlineHome } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuFileText } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import './../../CSS/dashboard.css';
import { Link } from 'react-router-dom'

function DashBoard({ dashBoard }) {

    console.log(dashBoard)
    return (


        <div className={!dashBoard ? 'dashBoard-wrapper vanish' : 'dashBoard-wrapper '}>



            <div className={!dashBoard ? 'dashboard-container shrink' : 'dashboard-container'}>


                <img alt="Africheckout logo" src="https://africheckout.com/images/logo.png" className="logo1"></img>

                <Link to='/dashboard'>
                    <div className="home-container">
                        <AiOutlineHome className="home-icon" />
                        {
                            dashBoard && <h3 className="dash">Dashboard</h3>
                        }


                    </div>
                </Link>


                <Link to='/product'>

                    <div className="product-container">
                        <TfiMenuAlt className="home-icon" />
                        {
                            dashBoard && <h3 className="dash">Products</h3>
                        }

                    </div>
                </Link>

                <Link to='/transaction'>
                    <div className="transaction-container">
                        <AiOutlineDollarCircle className="home-icon" />
                        {
                            dashBoard && <h3 className="dash">Transactions</h3>
                        }

                    </div>
                </Link>


                <div className="accounts-container">
                    {
                        dashBoard && <h3 className="dash">Accounts</h3>
                    }

                </div>

                <div className="compliance-container">
                    <LuFileText className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Compliance</h3>
                    }

                </div>

                <div className="settings-container">
                    <BsTools className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Settings</h3>
                    }

                </div>

                <div className="payout-container">
                    {
                        dashBoard && <h3 className="dash">Payouts</h3>
                    }

                </div>

                <div className="payoutAccount-container">
                    <MdOutlinePayment className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Payout Accounts</h3>
                    }
                </div>
                <div className="request-container">
                    <IoMdSend className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Payout Request</h3>
                    }
                </div>
            </div>
        </div>










    )
}

export default DashBoard;