import Header from './components/header'
import DashBoard from './components/dashboard';
import { useState } from 'react';


function App() {
  const [clicked,setClick] = useState(true);

  return (
    <>

    <Header clicked={clicked} setClick={setClick}/>
    <DashBoard dashBoard={clicked} setDashBoard={setClick}/>

  
    </>
  )
}

export default App
