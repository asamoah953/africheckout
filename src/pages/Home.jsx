import './../../CSS/home.css';
import { CiCircleCheck } from "react-icons/ci";
import LineChart from '../components/chart';



function Home( {moneyInfo} ){
    return(
        <>
       <div className="dashboard-home" >
                <h3 className='dashboardText' >Dashboard</h3>

         <div className="dashboard-div">
            {
                moneyInfo.map((info)=>(
                    <div className='payout'  key={info.key}>

                <div className='money-info' key={info.key}>
                    <CiCircleCheck className='icon'/>
                    <h3 className='txt' style={{position:"relative",bottom:'5px', display:'inline-block' , backgroundColor:'#FFFFFF', marginTop:'7px', fontSize:'18px', marginLeft:'8px'}}>{info.info}</h3>
                    <h3 style={{backgroundColor:'#FFFFFF',marginTop:'4px', fontSize:'2rem'}}>{info.amount}</h3>
                </div>

            </div>
                ))
            }

        </div>

        <div className='earning'><h3 className='text'>Earning Overview</h3></div>
        <div>
            
            <LineChart />
        </div> 
        </div>

        
 
        </>
    )



}

export default Home;