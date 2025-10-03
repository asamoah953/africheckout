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
import { useState } from 'react';


function App() {
  const [clicked, setClick] = useState(true);


  const moneyInfo = [
    {key:1, info:'Available Payout', amount:'$0.00'},
    {key:2, info:'Pending Payout', amount:'$0.00'},
    {key:3, info:'Total Revenue', amount:'$0.00'},
    {key:4, info:'Chargebacks', amount:'0'},
    {key:5, info:'Todays revenue', amount:'$0.00'},
    {key:6, info:'This weeks revenue', amount:'$0.00'},
    {key:7, info:'This months revenue', amount:'$0.00'},
    {key:8, info:'Total Amont Settled', amount:'$0.00'}
  ]

  return (
    <>

        <Header clicked={clicked} setClick={setClick} />
        <DashBoard dashBoard={clicked} setDashBoard={setClick} />

        <Routes>
           <Route path='/' element={<Home moneyInfo={moneyInfo}/>} />
          <Route path='/product' element={<Product />} />
           {/*<Route path='/transaction' element={<Transaction />} />
          <Route path='/compliance' element={<Compliance/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/payout' element={<PayOut/>}/>
          <Route path='/request' element={<PayoutRequest/>}/>  */}
        </Routes>



    </>
  )
}

export default App
