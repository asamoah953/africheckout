import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


function UserMenu({ userMenu }) {
  return (
    <>
      {userMenu && (
        <div className="user-menu">
          <div className="menu-item1">
            <FaUserCircle className="usericon" />
            <Link to='/settings' className="p-link">Profile</Link>
          </div>
          <div className="menu-item2">
            <CiLogout className="logouticon" />
            <Link to='#' className="p-link">Logout</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default UserMenu;