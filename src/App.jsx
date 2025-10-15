import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import DashBoard from './components/dashboard';
import Home from './pages/Home';
import Product from './pages/product';
import Transaction from './pages/transaction';
import Compliance from './pages/compliance';
import Settings from './pages/settings';
import PayOut from './pages/payout';
import PayoutRequest from './pages/payoutRequest';
import NewProduct from './pages/newProduct';
import NewPayOutAccount from './pages/newPayoutAccount';
import UserMenu from './components/userMenu';
import { CiCircleCheck } from "react-icons/ci";
import { RiPassPendingFill } from "react-icons/ri";
import { BiDirections } from "react-icons/bi";
import { TbSum } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { useState } from 'react';


function App() {
  const [clicked, setClick] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [usermenu, setUsermenu] = useState(false);

  const moneyInfo = [
    { key: 1, info: 'Available Payout', amount: '$0.00', icon: <CiCircleCheck className='icon'/> },
    { key: 2, info: 'Pending Payout', amount: '$0.00', icon: <RiPassPendingFill className='icon'/> },
    { key: 3, info: 'Total Revenue', amount: '$0.00', icon: <TbSum className='icon'/> },
    { key: 4, info: 'Chargebacks', amount: '0', icon: <BiDirections className='icon'/> },
    { key: 5, info: "Today's revenue", amount: '$0.00', icon: <TbSum className='icon'/> },
    { key: 6, info: "This week's revenue", amount: '$0.00', icon: <TbSum className='icon'/> },
    { key: 7, info: 'This months revenue', amount: '$0.00', icon: <CiCircleCheck className='icon'/> },
    { key: 8, info: 'Total Amount Settled', amount: '$0.00', icon: <LuWallet className='icon'/> },
  ]

  return (
    <>

      <Header clicked={clicked} setClick={setClick} setUserMenu={setUsermenu} />
      <DashBoard dashBoard={clicked} setDashBoard={setClick} />
      <UserMenu userMenu={usermenu} setUserMenu={setUsermenu} />
      <Routes>
        <Route path='/' element={<Home moneyInfo={moneyInfo} />} />
        <Route path='/product' element={<Product />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/compliance' element={<Compliance />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/payout' element={<PayOut />} />
        <Route path='/request' element={<PayoutRequest showPopup={showPopup} setShowPopup={setShowPopup} />} />
        <Route path='/newproduct' element={<NewProduct />} />
        <Route path='/newpayoutaccount' element={<NewPayOutAccount />} />
      </Routes>



    </>
  )
}

export default App;
