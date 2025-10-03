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
import { BiX } from "react-icons/bi";
import { useState } from "react";

function DashBoard({ dashBoard, setDashBoard }) {

    const [account, setAccount] = useState(true);
    const [payout, setPayout] = useState(true)

    return (


        <div className={!dashBoard ? 'dashBoard-wrapper vanish' : 'dashBoard-wrapper '}>



            <div className={!dashBoard ? 'dashboard-container shrink' : 'dashboard-container'}>
                <BiX style={{position:'absolute',right:'.7rem',fontSize:'2.5rem', backgroundColor:'gray', color:'red',borderRadius:'2rem',cursor:'pointer'}} onClick={()=>setDashBoard(prev=>!prev)}/>



                <img alt="Africheckout logo" src="https://africheckout.com/images/logo.png" className="logo1"></img>

                <Link to='/' onClick={()=>setDashBoard(prev=>!prev)}>
                    <div className="home-container">
                        <AiOutlineHome className="home-icon" />
                        {
                            dashBoard && <h3 className="dash">Dashboard</h3>
                        }


                    </div>
                </Link>


                <Link to='/product' onClick={()=>setDashBoard(prev=>!prev)}>

                    <div className="product-container">
                        <TfiMenuAlt className="home-icon" />
                        {
                            dashBoard && <h3 className="dash">Products</h3>
                        }

                    </div>
                </Link>

                <Link to='/transaction' onClick={()=>setDashBoard(prev=>!prev)}>
                    <div className="transaction-container">
                        <AiOutlineDollarCircle className="home-icon" />
                        {
                            dashBoard && <h3 className="dash">Transactions</h3>
                        }

                    </div>
                </Link>


                <div className="accounts-container">
                    {
                        dashBoard && <h3 className="dash">Accounts 
                        {
                            account && <IoIosArrowDown className='arrow' style={{ marginLeft:'10rem', cursor:'pointer'}} onClick={()=>setAccount(prev=> !prev)}/>

                        }
                        {
                           !account && <IoChevronUpOutline className="arrow" style={{ marginLeft:'10rem', cursor:'pointer'}} onClick={()=>setAccount(prev=>!prev)}/>
                        }
                        </h3>
                        
                    }

                </div>

                    {
                         !account &&  <Link to='/compliance' onClick={()=>setDashBoard(prev=>!prev)}><div className="compliance-container">
                    <LuFileText className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Compliance</h3>
                    }

                </div></Link>
                    }

                 {
                    !account && <Link to='/settings' onClick={()=>setDashBoard(prev=>!prev)}><div className="settings-container">
                    <BsTools className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Settings</h3>
                    }

                </div></Link>
                 }
                    

                <div className="payout-container">
                    {
                        dashBoard && <h3 className="dash" style={{marginTop:'1.7rem'}}>Payouts 
                        {
                            payout && <IoIosArrowDown className="arrow" style={{ marginLeft:'10.7rem', cursor:'pointer'}} onClick={()=>setPayout(prev=> !prev)}/>

                        }
                        {
                           !payout && <IoChevronUpOutline className="arrow" style={{ marginLeft:'10.7rem', cursor:'pointer'}} onClick={()=>setPayout(prev=>!prev)}/>
                        }
                        </h3>
                    }


                </div>
                {
                   !payout && <Link to='/payout' onClick={()=>setDashBoard(prev=>!prev)}><div className="payoutAccount-container">
                    <MdOutlinePayment className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Payout Accounts</h3>
                    }
                </div></Link>
                }
               {
                 !payout && <Link to='/request'  onClick={()=>setDashBoard(prev=>!prev)}><div className="request-container">
                    <IoMdSend className="home-icon" />
                    {
                        dashBoard && <h3 className="dash">Payout Request</h3>
                    }
                </div></Link>
               }
            </div>
        </div>










    )
}

export default DashBoard;