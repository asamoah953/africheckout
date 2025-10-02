import { GoChevronLeft } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import './../../CSS/header.css'



function Header({clicked,setClick}) {
       
    


    return (
        <header className="header-container">
           
            <div className= { !clicked ? 'logo-container shrink' : 'logo-container'} >
               
               {

                clicked && <img alt="Africheckout logo" src="https://africheckout.com/images/logo.png" className="logo"></img>
                

               }
               {

                clicked ? <GoChevronLeft className="left-arrow" onClick={()=>setClick(prev => !prev)}/> 
                : <FiChevronRight className="right-arrow" onClick={()=>setClick(prev => !prev)}/>


                

               }
              
                
            </div>
            <FiMenu className="menu-icon" onClick={()=>setClick(prev =>!prev)}/>

                <div className="profile">
                    <h3 className="profile-firstletter">A</h3>
                </div>

        </header>
    )
}

export default Header;